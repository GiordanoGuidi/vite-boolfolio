<script>
export default {
    name: 'AppLoader',

};
</script>

<template>
    <div class="loader-overlay">
        <div class=" spinner spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.loader-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.66);

    .spinner-border {
        width: 150px;
        height: 150px;
    }

}
</style>