<script>
import { store } from '../data/store';
import axios from 'axios';
import FormAlert from '../components/forms/FormAlert.vue';
//Endpoint
const endpoint = 'http://localhost:8000/api/contact-message';
//Variabile del form con i campi vuoti
const emptyForm = { email: '', subject: '', message: '', }
export default {
    name: 'ContactUsPage',
    components: { FormAlert },
    data: () => ({
        form: emptyForm,
        successMessage: null,
        errors: [],
        isPristine: true,
    }),
    computed: {
        hasErrors() {
            return Object.keys(this.errors).length;
        },
        showAlert() {
            //trasformiamo i valori in un booleano
            return Boolean(this.successMessage || this.hasErrors)
        },

        alertType() {
            return this.hasErrors ? 'danger' : 'success';
        }
    },
    methods: {

        validateField(field) {
            if (this.isPristine) return '';
            return this.errors[field] ? 'is-invalid' : 'is-valid';
        },

        //Validazione del form lato FrontEnd
        validateForm() {
            this.errors = {};
            this.successMessage = null;
            //Validazione email
            if (!this.form.email) {
                this.errors.email = 'La mail è obbligatoria';
            } else if (!this.form.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                this.errors.email = 'La mail inserita non è valida';
            }
            //Validazione oggetto della mail
            if (!this.form.subject) this.errors.subject = 'L/ oggetto della mail è obbligatorio';
            //Validazione messaggio della mail
            if (!this.form.message) this.errors.message = 'Il messaggio della mail è obbligatorio';

        },

        //Funzione chiamata all'invio del form
        sendForm() {
            this.isPristine = false;
            //Valido il form
            this.validateForm();
            //Se ci sono errori interrompi
            if (this.hasErrors) return;
            store.isLoading = true
            axios.post(endpoint, this.form).then(() => {
                // Svuotiamo il form
                this.form = { ...emptyForm };
                this.isPristine = true;
                this.successMessage = 'Il messaggio è stato inviato con successo'
            })
                .catch(err => {
                    console.error(err);
                    //Errori validazione backend
                    if (err.response.status === 422) {
                        const { errors } = err.response.data
                        this.errors = { ...errors }
                    }
                    //Errori di altro tipo non del form
                    else {
                        this.errors = { network: 'Si è verificato un errore!' }
                    }
                })
                .then(() => {
                    store.isLoading = false;
                })
        }
    }
};
</script>

<template>
    <h1>Contattaci</h1>

    <!-- TODO gestire alert-->
    <FormAlert :isOpen="showAlert" :type="alertType" :dismissible="!hasErrors">
        <div v-if="successMessage">{{ successMessage }}</div>
        <ul v-if="hasErrors">
            <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
        </ul>
    </FormAlert>
    <!--Form Contatti-->
    <form @submit.prevent="sendForm()" novalidate>
        <!--Email-->
        <div class="mb-3">
            <label for="email" class="form-label">La tua email<sup class="text-danger">*</sup></label>
            <input type="email" class="form-control" id="email" :class="validateField('email')"
                placeholder="name@example.com" v-model.trim="form.email">
            <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
            <small class="form-text text-muted">La tua mail,ti ricontatteremo a questo indirizzo</small>
        </div>

        <!--Oggetto-->
        <div class="mb-3">
            <label for="subject" class="form-label">Oggetto della mail<sup class="text-danger">*</sup></label>
            <input type="text" :class="validateField('subject')" class="form-control" id="subject"
                v-model.trim="form.subject" required>
            <div v-if="errors.subject" class="invalid-feedback">{{ errors.subject }}</div>
        </div>

        <!--Messaggio-->
        <div class="mb-3">
            <label for="message" class="form-label">Contenuto della mail<sup class="text-danger">*</sup></label>
            <textarea type="text" class="form-control" :class="validateField('message')" id="message" cols="20"
                rows="10" v-model.trim="form.message"></textarea>
            <div v-if="errors.message" class="invalid-feedback">{{ errors.message }}</div>
        </div>

        <div class="d-flex justify-content-center">
            <button class="btn btn-primary" type="submit">Invia</button>
        </div>

    </form>
</template>

<style></style>