<script lang="ts" setup>
import { computed } from "vue"

import movie15 from "@/assets/movie15.json"

import MovieCard from "@/components/MovieCard.vue"
import MovieCardListSorter from "@/components/MovieCardListSorter.vue"
import NoFilmsFound from "@/components/NoFilmsFound.vue"

import type { Movie } from "@/types/movie"

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(
  defineProps<{
    movies: Movie[]
  }>(),
  {
    movies: movie15
  }
)

const searchedMoviesLength = computed(() => props.movies.length)
</script>

<template>
  <div class="bg-netflix-dark-gray">
    <MovieCardListSorter :found-qty="searchedMoviesLength" />
    <div v-if="searchedMoviesLength != 0">
      <div class="flex flex-wrap flex-row mx-12 items-center">
        <div
          v-for="movie in movies"
          :key="movie.id"
          class="basis-1/3 mb-1 flex-grow-0 flex-shrink"
        >
          <MovieCard :movie="movie" />
        </div>
      </div>
    </div>
    <div
      v-else
      class="flex h-80 justify-center -mt-12 items-center"
    >
      <NoFilmsFound />
    </div>
  </div>
</template>
