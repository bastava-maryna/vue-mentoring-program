<script setup lang="ts">
import SearchForm from "@/components/SearchForm.vue"
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
import MovieCardList from "@/components/MovieCardList.vue"
import MovieSearch from "@/components/MovieSwitcher.vue"
import { useSearchStore } from "@/store/SearchStore"
import { useMoviesStore } from "@/store/MoviesStore"
import { storeToRefs } from "pinia"
import { useSearchMovies } from "@/composables/useSearch"

const { sortBy, filter, search } = storeToRefs(useSearchStore())
const { setFilter } = useSearchStore()
const { movies } = storeToRefs(useMoviesStore())
const handleFilter = (val) => {
  setFilter(val.value.toLowerCase())
}

const searchedMovies = useSearchMovies(movies, filter, search, sortBy)
</script>

<template>
  <div
    class="bg-local bg-center bg-cover bg-no-repeat"
    style="background-image: url('src/assets/images/movie-bg-1.jpg')"
  >
    <AppHeader />
    <SearchForm />
    <MovieSearch
      title="SEARCH BY"
      label-left="TITLE"
      label-right="GENRE"
      class="mx-24 pt-3 pb-24"
      @filter="handleFilter"
    />
  </div>
  <MovieCardList
    v-model:sort-by="sortBy"
    :search-query="search"
    :filter="filter"
    :movies="searchedMovies"
  />
  <AppFooter />
</template>
