<script>
export default {
    name: 'BasePagination',
    props: { links: Array },
    emit: ['change-page'],
};
</script>

<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li v-for="link in  links " :key="link.label" class="page-item">
                <button class="page-link" :class="{ active: link.active, disabled: link.url === null }" :href="link.url"
                    v-html="link.label" :disabled="!link.url" @click="$emit('change-page', link.url)"></button>
            </li>
        </ul>
    </nav>
</template>

<style></style>