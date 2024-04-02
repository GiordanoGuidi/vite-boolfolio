<script>
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'Boolfolio',
  components: { AppHeader },
};
</script>

<template>
  <AppHeader />
  <main>
    <div class="container pt-4">
      <RouterView />
    </div>
  </main>
</template>

<style></style>