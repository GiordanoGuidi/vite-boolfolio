<script>
import axios from 'axios';
import { store } from '../data/store';
import ProjectsList from '../components/projects/ProjectsList.vue';
const baseUri = 'http://localhost:8000/api';
export default {
    name: 'TechnologyProjectsPage',
    components: { ProjectsList },
    data: () => ({
        store,
        technologyLabel: '',
        projects: [],

    }),

    methods: {
        fetchProjects() {
            store.isLoading = true;
            axios.get(`${baseUri}/technologies/${this.$route.params.slug}/projects`)
                .then(res => {
                    const { label, projects } = res.data;
                    this.technologyLabel = label;
                    this.projects = projects;
                })
                .catch(err => {
                    console.error(err);
                })
                .then(() => {
                    store.isLoading = false
                })
        }
    },
    created() {
        this.fetchProjects();
    },
    watch: {
        '$route'(to, from) {
            if (to.params.slug !== from.params.slug) {
                this.fetchProjects();
            }
        }
    }
};
</script>

<template>
    <h1>Progetti per la Tecnologia : {{ technologyLabel }}</h1>
    <ProjectsList :projects="projects" />
</template>

<style></style>