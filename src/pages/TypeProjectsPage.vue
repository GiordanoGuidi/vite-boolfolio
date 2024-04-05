<script>
import axios from 'axios';
import { store } from '../data/store';
import ProjectsList from '../components/projects/ProjectsList.vue';
const baseUri = 'http://localhost:8000/api';
export default {
    name: 'TypeProjectsPage',
    components: { ProjectsList },
    data: () => ({
        store,
        projects: [],
        typeLabel: '',
    }),

    methods: {
        fetchProjects() {
            store.isLoading = true;
            axios.get(`${baseUri}/types/${this.$route.params.slug}/projects/`)
                .then(res => {
                    const { projects, label } = res.data;
                    this.projects = projects;
                    this.typeLabel = label;
                })
                .catch(err => {
                    console.error(err);
                })
                .then(() => {
                    store.isLoading = false;
                })
        }
    },
    created() {
        this.fetchProjects();
    }
};
</script>

<template>
    <div v-if="!store.isLoading">
        <h1>Progetti per la tipologia : {{ typeLabel }}</h1>
        <ProjectsList :projects="projects" />
    </div>
</template>

<style></style>