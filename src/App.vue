<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './pages/HomePage.vue';
export default {
  name: 'Boolfolio',
  components: { AppHeader, HomePage },
};
</script>

<template>
  <AppHeader />
  <main>
    <div class="container pt-4">
      <HomePage />
    </div>
  </main>
</template>

<style></style>