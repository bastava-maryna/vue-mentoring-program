import { ref, computed, type Ref, type ComputedRef } from "vue"
import { get, set } from "@vueuse/core"
import { defineStore } from "pinia"

import movie15 from "@/assets/movie15.json"
import type { Movie } from "@/types/movie"

export const useMoviesStore = defineStore("movies-store", () => {
  const movies: Ref<Movie[]> = ref(movie15)
  const setMovies: void = (newMovies) => set(movies, newMovies)

  const getMovie: ComputedRef<Movie> = (movieId) =>
    computed(() => get(movies).filter((movie) => movie.id === movieId)[0])

  const moviesSize: ComputedRef<number> = computed(() => get(movies).length)

  return { movies, setMovies, getMovie, moviesSize }
})
