<script>
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'ProjectsList',
    components: { ProjectCard },
    props: { projects: Array, },
};
</script>

<template>
    <div class="row mt-5 gap-3">
        <div class="col-12" v-if="projects.length" v-for="project in projects" :key="project.id">
            <ProjectCard :project="project" :isDetail="true" />
        </div>
        <h4 v-else>Non ci sono Progetti</h4>
    </div>
</template>

<style></style>