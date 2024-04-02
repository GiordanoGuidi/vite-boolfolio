//Importo le funzioni di Vue Router
import { createRouter, createWebHistory } from 'vue-router';
//Importo le pagine
import HomePage from '../pages/HomePage.vue';
import ProjectDetail from '../pages/ProjectDetail.vue';
//Definisco le rotte
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/projects/:id', name: 'project-detail', component: ProjectDetail }
        //#Aggiungi pagina Not Found
    ]
});
export { router };