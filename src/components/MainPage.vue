<script setup lang="ts">
import { ref } from "vue"

import SearchForm from "@/components/SearchForm.vue"
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
import MovieCardList from "@/components/MovieCardList.vue"
import MovieSearch from "@/components/MovieSwitcher.vue"

const filter = ref("title")
const search = ref("")
const sortBy = ref("release date")
const handleSearchQuery = (searchQuery) => {
  search.value = searchQuery.toLowerCase()
}
const handleFilter = (val) => {
  filter.value = val.value.toLowerCase()
}
</script>

<template>
  <div
    class="bg-local bg-center bg-cover bg-no-repeat"
    style="background-image: url('src/assets/images/movie-bg-1.jpg')"
  >
    <AppHeader />
    <SearchForm @search="(searchQuery) => handleSearchQuery(searchQuery)" />
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
  />
  <AppFooter />
</template>
