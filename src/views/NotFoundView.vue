<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
import NotFound from "@/components/NotFound.vue"
</script>

<template>
  <div
    class="bg-local bg-center bg-cover bg-no-repeat"
    style="background-image: url('src/assets/images/movie-bg-1.jpg')"
  >
    <AppHeader />
  </div>
  <div class="bg-netflix-dark-gray">
    <NotFound />
  </div>
  <AppFooter />
</template>
