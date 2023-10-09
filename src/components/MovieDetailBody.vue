<script lang="ts" setup>
import AText from "@/components/AText.vue"
import MovieDetailBodyRating from "@/components/MovieDetailBodyRating.vue"
import MovieDetailBodyIStats from "@/components/MovieDetailBodyIStats.vue"

const props = withDefaults(
  defineProps<{
    title: string
    rating: number
    year: number
    runtime: string
    description: string
    genre: string
  }>(),
  {}
)
</script>

<template>
  <div class="flex flex-col">
    <div class="mx-9 flex text-5xl text-white h-12 items-center tracking-wider">
      <AText class="mr-5"> {{ props.title }}</AText>
      <MovieDetailBodyRating :value="props.rating" />
    </div>

    <AText class="mx-9 my-4 text-base text-white/75 tracking-widest"> {{ props.genre }}</AText>
    <div class="mx-9 flex h-12 items-end tracking-widest font-light">
      <MovieDetailBodyIStats
        :value="props.year"
        unit="year"
      />
      <MovieDetailBodyIStats
        :value="props.runtime"
        unit="min"
      />
    </div>
    <AText class="mx-9 my-4 text-lg font-light text-white tracking-normal">
      {{ props.description }}
    </AText>
  </div>
</template>
