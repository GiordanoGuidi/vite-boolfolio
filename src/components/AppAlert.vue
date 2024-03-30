<script>
export default {
    name: 'AppAlert',
    emit: ['close-button', 'retry'],
};
</script>

<template>
    <div class="alert alert-warning alert-dismissible fade show mt-3" role="alert">
        Si è verificato un errore. <span role="button" @click="$emit('retry')"
            class="text-decoration-underline">Riprova</span>
        <button type="button" @click="$emit('close-button')" class="btn-close" data-bs-dismiss="alert"
            aria-label="Close"></button>
    </div>
</template>

<style></style>