<script>
import axios from 'axios';
import { store } from '../data/store';
const baseUri = 'http://localhost:8000/api/';
export default {
    name: 'TypeProjectPage',
    data: () => ({
        store,
        projects: [],
    }),
    methods: {
        fetchPosts() {
            axios.get(`${baseUri}/${this.$route.params.slug}`)
                .then(res => {
                    this.projects = res.data;

                })
                .catch(err => {
                    console.error(err);
                })
                .then(() => {

                })
        }
    },
    created() {
        this.fetchProjects();
    }
};
</script>

<template>
    <h1>Ciao</h1>

</template>

<style></style>