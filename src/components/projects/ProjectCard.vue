<script>
export default {
    name: 'ProjectCard',
    props: { project: Object },
    methods: {
        abstract() {
            const abstract = this.project.content.slice(0, 300);
            return abstract + '...';
        }
    }


};
</script>

<template>
    <!-- ProjectCard -->
    <div class="card my-3">
        <div class="row g-0">
            <div class="col-md-8">
                <div class="card-header">
                    <h5 class="card-title">{{ project.title }}</h5>
                </div>
                <div class="card-body">
                    <p>{{ abstract() }}</p>
                </div>
                <div class="card-footer">
                    <!-- <address class="card-text">{{ project.content }}</address> -->
                    <small>Pubblicato il: {{ project.created_at }}</small>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>