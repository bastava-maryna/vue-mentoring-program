<script setup lang="ts">
import { useRoute } from "vue-router"

import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
import MovieCardList from "@/components/MovieCardList.vue"
import IconSearch from "@/components/IconSearch.vue"
import MovieDetail from "@/components/MovieDetail.vue"

import { useMoviesStore } from "@/store/MoviesStore"
import { useSearchStore } from "@/store/SearchStore"
import { storeToRefs } from "pinia"
import { useSearchMovies } from "@/composables/useSearch"

const route = useRoute()

const { movies, getMovie } = useMoviesStore()

const { sortBy, filter, search } = storeToRefs(useSearchStore())

const movie = getMovie(route.params.movieId)

const searchedMovies = useSearchMovies(movies, filter, search, sortBy)
</script>

<template>
  <div class="bg-netflix-dark-gray">
    <AppHeader>
      <router-link
        class="link link-hover"
        :to="`/`"
      >
        <IconSearch
          width="30"
          class="mt-4"
        />
      </router-link>
    </AppHeader>
    <MovieDetail :movie="movie" />
  </div>
  <MovieCardList
    v-model:sort-by="sortBy"
    :search-query="search"
    :filter="filter"
    :movies="searchedMovies"
  />
  <AppFooter />
</template>
