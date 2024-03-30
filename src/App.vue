<script>
import AppHeader from './components/AppHeader.vue';
import ProjectsList from './components/projects/ProjectsList.vue';
import ProjectCard from './components/projects/ProjectCard.vue'
import axios from 'axios';
const deafaultEndpoint = 'http://localhost:8000/api/projects';
export default {
  name: 'Boolfolio',
  components: { AppHeader, ProjectsList, ProjectCard, },
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

      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li v-for="link in  projects.links " :key="link.label" class="page-item">
            <button class="page-link" :class="{ active: link.active, disabled: link.url === null }" :href="link.url"
              v-html="link.label" :disabled="!link.url" @click="fetchProjects(link.url)"></button>
          </li>
        </ul>
      </nav>
    </div>
  </main>
</template>

<style></style>