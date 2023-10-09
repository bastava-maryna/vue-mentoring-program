import { get } from "@vueuse/core"
import { computed, type ComputedRef, type Ref } from "vue"
import type { Movie } from "@/types/movie"

export const useSearchMovies = (
  movies: Ref<Movie[]>,
  filter: Ref<string>,
  searchQuery: Ref<string>,
  sortBy: Ref<string>
): ComputedRef<Movie[]> =>
  computed(() => {
    let temp: Movie[] = get(movies)

    if (get(searchQuery) && get(filter) === "title") {
      temp = get(movies).filter((movie: Movie) => {
        return movie.title.toLowerCase().includes(get(searchQuery))
      })
    } else if (get(searchQuery) && get(filter) === "genre") {
      temp = get(movies).filter((movie: Movie) => {
        return movie.genre.toLowerCase().includes(get(searchQuery))
      })
    }

    let sorter
    if (get(sortBy) === "release date") {
      sorter = (a: Movie, b: Movie) => b.year - a.year
    } else if (get(sortBy) === "rating") {
      sorter = (a: Movie, b: Movie) => b.users_rating - a.users_rating
    }
    return temp.sort(sorter)
  })
