<script>
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
            <div class="col">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <RouterLink v-if="!isDetail" class="btn btn-primary"
                        :to="{ name: 'project-detail', params: { slug: project.slug } }">
                        Vedi
                    </RouterLink>
                    <button v-else class="btn btn-secondary" @click="$router.back()">Torna Indietro
                    </button>
                </div>
                <div class="card-body">
                    <img v-if="project.image" :src="project.image" class="float-start img-fluid" :alt="project.title">
                    <p>{{ !isDetail ? abstract : project.content }}</p>
                </div>
                <div class="card-footer d-flex justify-content-between">
                    <small>{{ project.user ? project.user.name : 'Anonimo' }}</small>
                    <small>Pubblicato il: {{ formattedDate }}</small>

                    <p v-if="project.type">Tipo:
                        <span class="badge" :style="{ backgroundColor: project.type.color }">{{ project.type.label
                            }}</span>
                    </p>
                    <div>
                        <p v-if="project.technologies">Tecnologie:
                            <span v-for="technology in project.technologies"
                                :class="'badge rounded-pill text-bg-' + technology.color">
                                {{ technology.label }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>