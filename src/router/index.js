//Importo le funzioni di Vue Router
import { createRouter, createWebHistory } from 'vue-router';
//Importo le pagine
import HomePage from '../pages/HomePage.vue';
import ProjectDetail from '../pages/ProjectDetail.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
//Definisco le rotte
const router = createRouter({
    history: createWebHistory(),

    linkActiveClass: 'partial-active',
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/projects/:slug', name: 'project-detail', component: ProjectDetail },
        { path: '/not-found', name: 'not-found', component: NotFoundPage },
        { path: '/:pathMatch(.*)*', redirect: 'not-found' },
    ]
});
export { router };