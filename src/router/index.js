//Importo le funzioni di Vue Router
import { createRouter, createWebHistory } from 'vue-router';
//Importo le pagine
import HomePage from '../pages/HomePage.vue';
import ProjectDetail from '../pages/ProjectDetail.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
//Definisco le rotte
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/projects/:slug', name: 'project-detail', component: ProjectDetail },
        { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundPage },

        //#Aggiungi pagina Not Found
    ]
});
export { router };