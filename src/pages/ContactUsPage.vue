<script>
// import { store } from './data/store';
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/contact-message';
const emptyForm = { email: '', subject: '', message: '', }
export default {
    name: 'ContactUsPage',
    data: () => ({
        form: {
            email: '',
            subject: '',
            message: '',
        }
    }),
    methods: {
        sendForm() {
            axios.post(endpoint, this.form).then(() => {
                this.form = emptyForm
            })
                .catch(err => {
                    console.error(err)
                })
                .then(() => {

                })
        }
    }
};
</script>

<template>
    <h1>Contattaci</h1>
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