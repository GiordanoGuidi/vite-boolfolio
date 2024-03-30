<script>
import AppHeader from './components/AppHeader.vue';
import ProjectsList from './components/projects/ProjectsList.vue';
import ProjectCard from './components/projects/ProjectCard.vue';
import BasePagination from './components/BasePagination.vue';
import axios from 'axios';
const deafaultEndpoint = 'http://localhost:8000/api/projects';
export default {
  name: 'Boolfolio',
  components: { AppHeader, ProjectsList, ProjectCard, BasePagination },
  data: () => ({
    projects: {
      data: [],
      links: []
    }
  }),
  methods: {
    fetchProjects(endpoint) {
      axios.get(endpoint ?? deafaultEndpoint).then(res => {
        const { data, links } = res.data;
        this.projects = { data, links };
      })
    }
  },
  created() {
    this.fetchProjects()
  }
};
</script>

<template>
  <AppHeader />
  <main>
    <div class="container pt-4">
      <h1>Boolfolio</h1>
      <ProjectsList :projects="projects.data" />


      <BasePagination :links="projects.links" @change-page="fetchProjects" />
    </div>
  </main>
</template>

<style></style>