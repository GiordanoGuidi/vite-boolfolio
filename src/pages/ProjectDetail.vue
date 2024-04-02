<script>
import ProjectCard from '../components/projects/ProjectCard.vue';
import axios from 'axios';
import AppLoader from '../components/AppLoader.vue';
const deafaultEndpoint = 'http://localhost:8000/api/projects';
export default {
    name: 'ProjectDetail',
    components: { ProjectCard, AppLoader },
    data: () => ({
        project: null,
        isLoading: false,
        // isAlertOpen: false,
    }),
    methods: {
        getProject() {
            this.isLoading = true;
            axios.get(`${deafaultEndpoint}/${this.$route.params.id}`)
                .then(res => { this.project = res.data; })
                .catch(err => { console.error(err.message); this.isAlertOpen = true; })
                .then(() => { this.isLoading = false; })
        }
    },
    created() {
        this.getProject();
    }
}
</script>

<template>
    <AppLoader v-if="isLoading && !project" />
    <ProjectCard v-if="!isLoading && project" :project="project" />
</template>

<style></style>