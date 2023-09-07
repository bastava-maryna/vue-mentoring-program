<script lang="ts" setup>
import AText from "@/components/AText.vue"
import MovieSorter from "@/components/MovieSwitcher.vue"
</script>

<template>
  <div class="flex mb-16 justify-end bg-netflix-light-gray h-16 items-center">
    <AText class="mx-24 font-bold text-lg text-white tracking-wide grow"> 7 movie found </AText>
    <MovieSorter
      title="SORT BY"
      label-left="RELEASE DATE"
      label-right="RATING"
      title-background="netflix-light-gray"
      class="mx-24"
    />
  </div>
</template>
