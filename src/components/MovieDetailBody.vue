<script lang="ts" setup>
import AText from "@/components/AText.vue"
import MovieDetailBodyRating from "@/components/MovieDetailBodyRating.vue"
import MovieDetailBodyIStats from "@/components/MovieDetailBodyIStats.vue"
</script>

<template>
  <div class="flex flex-col">
    <div class="mx-9 flex text-5xl text-white h-12 items-center tracking-wider">
      <AText class="mr-5"> Kill Bill: Vol 2 </AText>
      <MovieDetailBodyRating value="4.3" />
    </div>

    <AText class="mx-9 my-4 text-base text-white/75 tracking-widest"> Drama, Music </AText>
    <div class="mx-9 flex h-12 items-end tracking-widest font-light">
      <MovieDetailBodyIStats
        value="2004"
        unit="year"
      />
      <MovieDetailBodyIStats
        value="154"
        unit="min"
      />
    </div>
    <AText class="mx-9 my-4 text-lg font-light text-white tracking-normal">
      American crime film written and directed by Quentin Tarantino; it is based on story by
      Tarantino and Roger Avary. Starring John Travolta, Samuel L.Jackson, Bruce Willis, Tim Roth,
      Ving Rhames, and Uma Turman, it tells several stories of criminal Los Angeles. The film`s
      title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th
      century, known for their graphic violence and punchy dialogue.
    </AText>
  </div>
</template>
