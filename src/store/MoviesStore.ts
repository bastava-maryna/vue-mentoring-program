import { computed, type ComputedRef, type Ref, ref } from "vue"
import { get, set } from "@vueuse/core"
import { defineStore } from "pinia"
import type { Movie } from "@/types/movie"
import { getMovies } from "@/composables/useFirestore"

export const useMoviesStore = defineStore("movies-store", () => {
  const movies: Ref<Movie[]> = ref<Movie[]>([])
  const initMovies = async (): Promise<void> => {
    await getMovies(movies)
  }
  const setMovies = (newMovies: Movie[]): void => set(movies, newMovies)

  const getMovie = (movieId: string): ComputedRef<Movie> =>
    computed(() => get(movies).filter((movie: Movie): boolean => movie.id === movieId)[0])

  const moviesSize: ComputedRef<number> = computed(() => get(movies).length)

  return { movies, setMovies, getMovie, moviesSize, initMovies }
})
