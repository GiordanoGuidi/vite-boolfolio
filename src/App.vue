<script>
import AppHeader from './components/AppHeader.vue';
import ProjectsList from './components/projects/ProjectsList.vue';
import ProjectCard from './components/projects/ProjectCard.vue';
import BasePagination from './components/BasePagination.vue';
import AppLoader from './components/AppLoader.vue';
import axios from 'axios';
const deafaultEndpoint = 'http://localhost:8000/api/projects';
export default {
  name: 'Boolfolio',
  components: { AppHeader, ProjectsList, ProjectCard, BasePagination, AppLoader },
  data: () => ({
    projects: {
      data: [],
      links: [],
    },
    isLoading: false,
  }),
  methods: {
    fetchProjects(endpoint) {
      this.isLoading = true;
      axios.get(endpoint ?? deafaultEndpoint).then(res => {
        const { data, links } = res.data;
        this.projects = { data, links };
      }).catch(err => {
        console.error(err);
      }).then(() => {
        this.isLoading = false;
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
      <AppLoader v-if="isLoading" />
      <ProjectsList v-else :projects="projects.data" />
      <BasePagination :links="projects.links" @change-page="fetchProjects" />
    </div>
  </main>
</template>

<style></style>