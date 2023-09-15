<script lang="ts" setup>
import MovieImage from "@/components/MovieImage.vue"
import MovieCardBody from "@/components/MovieCardBody.vue"
import type { Movie } from "@/types/movie"

interface Props {
  movie: Movie
}

const props = defineProps<Props>()
//<!--  <router-link class="link link-hover" :to="`/detail/${movie.id}`"> -->
</script>

<template>
  <div class="flex justify-center">
    <MovieImage
      v-lazy-load="movie.img_url"
      :alt="movie.title"
      class="w-80 h-[100]"
    />
  </div>
  <MovieCardBody
    :title="movie.title"
    :year="movie.year"
    :genre="movie.genre"
  />
</template>
