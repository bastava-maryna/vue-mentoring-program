<script lang="ts" setup>
import MovieImage from "@/components/MovieImage.vue"
import MovieCardBody from "@/components/MovieCardBody.vue"
import type { Movie } from "@/types/movie"

interface Props {
  movie: Movie
}

defineProps<Props>()
</script>

<template>
  <div class="flex justify-center">
    <router-link
      class="link link-hover"
      :to="`/detail/${movie.id}`"
    >
      <MovieImage
        v-lazy-load="movie.img_url"
        :alt="movie.title"
        class="w-80 h-[100]"
      />
    </router-link>
  </div>
  <MovieCardBody
    :title="movie.title"
    :year="movie.year"
    :genre="movie.genre"
  />
</template>
