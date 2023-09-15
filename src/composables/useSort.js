import { computed } from "vue"
//export const useSortMovies = (searchedMovies, sortBy)=>computed(()
export const useSortMovies = (searchedMovies, sortBy) =>
  computed(() => {
    console.log("sorter in list:", sortBy)
    let sortedMovies = searchedMovies
    if (sortBy === "release date") {
      const sorter = (a, b) => b.year - a.year
      return sortedMovies.sort(sorter)
    } else if (sortBy === "rating") {
      const sorter = (a, b) => b.users_rating - a.users_rating
      return sortedMovies.sort(sorter)
    } else return sortedMovies
  })
