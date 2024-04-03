<script>
import AppHeader from './components/AppHeader.vue';
import AppLoader from './components/AppLoader.vue';
import { store } from './data/store';
export default {
  name: 'Boolfolio',
  components: { AppHeader, AppLoader },
  data: () => ({
    store,
  })
};
</script>

<template>
  <AppHeader />
  <main>
    <div class="container pt-4">
      <AppLoader v-if="store.isLoading" />
      <RouterView />
    </div>
  </main>
</template>

<style></style>