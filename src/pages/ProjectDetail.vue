<script>
import { store } from '../data/store';
import ProjectCard from '../components/projects/ProjectCard.vue';
import axios from 'axios';
const deafaultEndpoint = 'http://localhost:8000/api/projects';
export default {
    name: 'ProjectDetail',
    components: { ProjectCard, },
    data: () => ({
        project: null,
        // isAlertOpen: false,
    }),
    methods: {
        getProject() {
            store.isLoading = true;
            axios.get(`${deafaultEndpoint}/${this.$route.params.slug}`)
                .then(res => { this.project = res.data; })
                .catch(err => { console.error(err.message); this.isAlertOpen = true; })
                .then(() => { store.isLoading = false; })
        }
    },
    created() {
        this.getProject();
    }
}
</script>

<template>
    <ProjectCard v-if="!store.isLoading && project" :project="project" :isDetail="true" />
</template>

<style></style>