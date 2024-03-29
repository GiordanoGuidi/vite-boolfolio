<script>
export default {
    name: 'ProjectCard',
    props: { project: Object }


};
</script>

<template>
    <!-- ProjectCard -->
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="project.image" class="img-fluid rounded-start" :alt="project.title">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <p class="card-text">{{ project.content }}</p>
                    <p class="card-text"><small class="text-muted">{{ project.created_at }}</small></p>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>