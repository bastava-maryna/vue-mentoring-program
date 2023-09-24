<script lang="ts" setup>
import NetflixLogo from "@/components/NetflixLogo.vue"
</script>

<template>
  <div class="flex justify-between mr-12">
    <NetflixLogo class="ml-12 h-11 pt-5" />
    <slot />
  </div>
</template>
