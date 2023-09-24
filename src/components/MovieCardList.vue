<script lang="ts" setup>
import { computed } from "vue"

import { useSearchMovies } from "@/composables/useSearch"

import type { Movie } from "@/types/movie"
import movie15 from "@/assets/movie15.json"

import MovieCard from "@/components/MovieCard.vue"
import MovieCardListSorter from "@/components/MovieCardListSorter.vue"
import NoFilmsFound from "@/components/NoFilmsFound.vue"

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(
  defineProps<{
    movies: Movie[]
    filter?: string
    searchQuery?: string
    sortBy?: "release date" | "rating"
  }>(),
  {
    movies: movie15,
    filter: "",
    searchQuery: "",
    sortBy: "release date"
  }
)
const emit = defineEmits(["update:sortBy"])

const handleSorter = (val) => {
  emit("update:sortBy", val)
}

const searchedMovies = useSearchMovies(props)

const searchedMoviesLength = computed(() => searchedMovies.value.length)
</script>

<template>
  <div class="bg-netflix-dark-gray">
    <MovieCardListSorter
      :found-qty="searchedMoviesLength"
      :value="sortBy"
      @sort-by="(sorter) => handleSorter(sorter)"
    />
    <div v-if="searchedMoviesLength != 0">
      <div class="flex flex-wrap flex-row mx-12 items-center">
        <div
          v-for="movie in searchedMovies"
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
