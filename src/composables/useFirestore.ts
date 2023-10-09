import { type Ref } from "vue"
import { collection, limit, onSnapshot, query } from "firebase/firestore"
import type { Movie } from "@/types/movie"
import db from "@/firebase/init"

const moviesRef = collection(db, "movie")

export const getMovies = async (movies: Ref<Movie[]>): Promise<void> => {
  const moviesQuery = query(moviesRef, limit(20))

  onSnapshot(moviesQuery, (querySnapshot): void => {
    const tempMovies: Movie[] = []
    querySnapshot.forEach((doc): void => {
      tempMovies.push({ id: doc.id, ...doc.data() } as Movie)
    })
    movies.value = tempMovies
  })
}
