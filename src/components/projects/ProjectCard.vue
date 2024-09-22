<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'ProjectCard',
    props: { project: Object, isDetail: Boolean },
    computed: {
        abstract() {
            const abstract = this.project.content.slice(0, 300);
            return abstract + '...';
        },

        formattedDate() {
            let dateTime = new Date(this.project.created_at);
            const year = dateTime.getFullYear()
            let month = dateTime.getMonth() + 1;
            let day = dateTime.getDate();
            let hour = dateTime.getHours();
            let minute = dateTime.getMinutes();
            if (day < 10) day = '0' + day;
            if (month < 10) month = '0' + month;
            if (minute < 10) minute = '0' + minute;
            return `${day}/${month}/${year} alle: ${hour}:${minute}`
        }
    }
};
</script>

<template>
    <!-- ProjectCard -->
    <div class="card my-3">
        <div class="row g-0">
            <div class="col-12">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <RouterLink v-if="!isDetail" class="btn btn-primary"
                        :to="{ name: 'project-detail', params: { slug: project.slug } }">
                        Vedi
                    </RouterLink>
                    <button v-else class="btn btn-secondary" @click="$router.back()">Torna Indietro
                    </button>
                </div>
                <div class="row">
                    <div class="col-4 p-4">
                        <img v-if="project.image" :src="project.image" class="float-start mb-3 rounded"
                            :alt="project.title">
                    </div>
                    <div class="col-8 p-4">
                        <p>{{ !isDetail ? abstract : project.content }}</p>
                    </div>
                </div>
                <div class="card-footer d-flex justify-content-between">
                    <small>{{ project.user ? project.user.name : 'Anonimo' }}</small>
                    <small>Pubblicato il: {{ formattedDate }}</small>

                    <p v-if="project.type">Tipo:
                        <RouterLink :to="{ name: 'type-projects-page', params: { slug: project.type.slug } }"><span
                                class="badge" :style="{ backgroundColor: project.type.color }">{{
                                    project.type.label
                                }}</span></RouterLink>
                    </p>
                    <div>
                        <p v-if="project.technologies?.length">Tecnologie:
                            <RouterLink :to="{ name: 'technology-projects-page', params: { slug: technology.slug } }"
                                v-for="technology in project.technologies" :key="technology.id">
                                <span :class="'badge rounded-pill me-2 text-bg-' + technology.color">
                                    {{ technology.label }}
                                </span>
                            </RouterLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
img {
    width: 100%;
    height: 400px;
}
</style>