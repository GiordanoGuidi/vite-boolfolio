<script>
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'ProjectsList',
    components: { ProjectCard },
    props: { projects: Array }


};
</script>

<template>
    <div class="row">
        <div class="col-12" v-for="project in projects" :key="project.id">
            <ProjectCard :project="project" />
        </div>
    </div>
</template>

<style></style>