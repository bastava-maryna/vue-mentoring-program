<script lang="ts" setup>
import { computed, ref } from "vue"
import { get } from "@vueuse/core"

import { useSearchMovies } from "@/composables/useSearch.js"
import { useSortMovies } from "@/composables/useSort.js"

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
  }>(),
  {
    movies: movie15,
    filter: "",
    searchQuery: ""
  }
)

const handleSorter = (val) => {
  sortBy.value = val.toLowerCase()
}

const searchedMovies = computed(() =>
  useSearchMovies(get(props.movies), get(props.filter), get(props.searchQuery))
)

const sortBy = ref("release date")

const sortedMovies = computed(() => useSortMovies(get(searchedMovies), get(sortBy)))

const searchedMoviesLength = computed(() => searchedMovies.value.length)
</script>

<template>
  <div class="bg-netflix-dark-gray">
    <MovieCardListSorter
      :found-qty="searchedMoviesLength"
      @sort-by="(sorter) => handleSorter(sorter)"
    />
    <div v-if="searchedMoviesLength != 0">
      <div
        v-for="movie in sortedMovies.value"
        :key="movie.id"
        class="flex flex-wrap flex-row mx-12 items-center"
      >
        <div class="basis-1/3 mb-1 flex-grow-0 flex-shrink">
          <MovieCard :movie="movie" />
        </div>
        <!--
       <div class="basis-1/3 mb-1 flex-grow-0 flex-shrink">
         <MovieCard/>
       </div>
       -->
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
