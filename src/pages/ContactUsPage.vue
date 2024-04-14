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
        //Funzione chiamata all'invio del form
        sendForm() {
            this.successMessage = null;
            this.errors = {};
            store.isLoading = true
            axios.post(endpoint, this.form).then(() => {
                // Svuotiamo il form
                this.form = { ...emptyForm };
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
            <input type="email" class="form-control" id="email" placeholder="name@example.com"
                v-model.trim="form.email">
            <small class="form-text text-muted">La tua mail,ti ricontatteremo a questo indirizzo</small>
        </div>

        <!--Oggetto-->
        <div class="mb-3">
            <label for="subject" class="form-label">Oggetto della mail<sup class="text-danger">*</sup></label>
            <input type="text" class="form-control" id="subject" v-model.trim="form.subject" required>
        </div>

        <!--Messaggio-->
        <div class="mb-3">
            <label for="message" class="form-label">Contenuto della mail<sup class="text-danger">*</sup></label>
            <textarea type="text" class="form-control" id="message" cols="20" rows="10"
                v-model.trim="form.message"></textarea>
        </div>

        <div class="d-flex justify-content-center">
            <button class="btn btn-primary" type="submit">Invia</button>
        </div>

    </form>
</template>

<style></style>