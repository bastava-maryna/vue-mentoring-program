<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
import MovieCardList from "@/components/MovieCardList.vue"
import IconSearch from "@/components/IconSearch.vue"
import MovieDetail from "@/components/MovieDetail.vue"
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
    <MovieDetail :movie="movie"/>
  </div>
  <MovieCardList />
  <AppFooter />
</template>
