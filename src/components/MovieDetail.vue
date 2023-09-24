<script lang="ts" setup>
import MovieImage from "@/components/MovieImage.vue"
import MovieDetailBody from "@/components/MovieDetailBody.vue"
import type { Movie } from "@/types/movie"

interface Props {
  movie: Movie
}

const props = defineProps<Props>()
</script>

<template>
  <div class="flex mx-12 mt-10 pb-16">
    <MovieImage
      :src="movie.img_url"
      :alt="movie.title"
      class="w-72 h-96"
    />
    <MovieDetailBody
      :description="movie.description"
      :genre="movie.genre"
      :rating="movie.users_rating"
      :runtime="movie.runtime"
      :title="movie.title"
      :year="movie.year"
    />
  </div>
</template>
