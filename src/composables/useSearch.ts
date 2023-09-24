import { computed } from "vue"
import type { ComputedRef } from "vue"
import type { Movie } from "@/types/movie"

export const useSearchMovies = (props): ComputedRef<Movie[]> =>
  computed(() => {
    const { movies, filter, searchQuery, sortBy } = props
    let temp: Movie[] = movies
    if (searchQuery && filter === "title") {
      temp = movies.filter((movie: Movie) => {
        return movie.title.toLowerCase().includes(searchQuery)
      })
    } else if (searchQuery && filter === "genre") {
      temp = movies.filter((movie: Movie) => {
        return movie.genre.toLowerCase().includes(searchQuery)
      })
    }

    if (sortBy === "release date") {
      const sorter = (a: Movie, b: Movie) => b.year - a.year
      return temp.sort(sorter)
    } else if (sortBy === "rating") {
      const sorter = (a: Movie, b: Movie) => b.users_rating - a.users_rating
      return temp.sort(sorter)
    } else return temp
  })
