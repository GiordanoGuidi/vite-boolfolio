//Importo le funzioni di Vue Router
import { createRouter, createWenHistory } from 'vue-router';
//Importo le pagine
import HomePage from '../pages/HomePage.vue';
//Definisco le rotte
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        }
    ]
});
export { router };