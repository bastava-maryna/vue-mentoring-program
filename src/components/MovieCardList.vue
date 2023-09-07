<script lang="ts" setup>
import MovieCard from "@/components/MovieCard.vue"
import MovieCardListSorter from "@/components/MovieCardListSorter.vue"
</script>

<template>
  <div class="bg-netflix-dark-gray">
    <MovieCardListSorter />
    <div class="flex flex-wrap flex-row mx-12 items-center">
      <div class="basis-1/3 mb-1 flex-grow-0 flex-shrink mx-auto">
        <MovieCard />
      </div>
      <div class="basis-1/3 mb-1 flex-grow-0 flex-shrink">
        <MovieCard />
      </div>
      <div class="basis-1/3 mb-1 flex-grow-0 flex-shrink">
        <MovieCard />
      </div>
      <div class="basis-1/3 mb-1 flex-grow-0 flex-shrink">
        <MovieCard />
      </div>
    </div>
  </div>
</template>
