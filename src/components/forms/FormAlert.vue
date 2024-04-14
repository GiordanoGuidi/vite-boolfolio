<script>
export default {
    name: 'FormAlert',
    props: {
        isOpen: Boolean,
        type: String | null,
        dismissible: Boolean,
    },
    emits: ['close']
}

</script>

<template>
    <div v-if="isOpen" class="alert fade show d-flex justify-content-between"
        :class="[`alert-${type ?? 'danger'}`, { 'alert-dismissable': dismissible }]" role="alert">
        <slot></slot>
        <button v-if="dismissible" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"
            @click="$emit('close')"></button>
    </div>
</template>

<style></style>