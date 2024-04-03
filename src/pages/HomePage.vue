<script>
import ProjectsList from '../components/projects/ProjectsList.vue';
import ProjectCard from '../components/projects/ProjectCard.vue';
import BasePagination from '../components/BasePagination.vue';
import AppAlert from '../components/AppAlert.vue';
import { store } from '../data/store';
import axios from 'axios';
const deafaultEndpoint = 'http://localhost:8000/api/projects';
export default {
    name: 'HomePage',
    components: { ProjectsList, ProjectCard, BasePagination, AppAlert },
    data: () => ({
        projects: {
            data: [],
            links: [],
        },
        store,
        isLoading: false,
        isAlertOpen: false,
    }),
    methods: {
        fetchProjects(endpoint) {
            store.isLoading = true;
            axios.get(endpoint ?? deafaultEndpoint).then(res => {
                const { data, links } = res.data;
                this.projects = { data, links };
                this.isAlertOpen = false;
            }).catch(err => {
                console.error(err);
                this.isAlertOpen = true;
            }).then(() => {
                store.isLoading = false;
            })
        },

        closeAlert() {
            const alert = document.querySelector('.alert')
            alert.classList.add('d-none')
        }
    },
    created() {
        this.fetchProjects()
    }
};
</script>

<template>
    <h1>Boolfolio</h1>
    <AppAlert v-if="isAlertOpen" @close-button="isAlertOpen = false" @retry="fetchProjects" />
    <div v-if="!store.isLoading">
        <ProjectsList :projects="projects.data" />
        <BasePagination :links="projects.links" @change-page="fetchProjects" />
    </div>
</template>

<style></style>