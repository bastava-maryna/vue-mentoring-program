export const useSearchMovies = (movies, filter, searchQuery) => {
  console.log("filter in list:", filter)
  console.log("searchQuery in list: ", searchQuery)
  if (searchQuery && filter === "title") {
    movies = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchQuery)
    })
  } else if (searchQuery && filter === "genre") {
    movies = movies.filter((movie) => {
      return movie.genre.toLowerCase().includes(searchQuery)
    })
  }
  return movies
}
