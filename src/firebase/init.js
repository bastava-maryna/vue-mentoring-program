// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqVhlyluY-MB7DxdQdbOUGp4GvsdvegN8",
  authDomain: "movie-db-86d11.firebaseapp.com",
  projectId: "movie-db-86d11",
  storageBucket: "movie-db-86d11.appspot.com",
  messagingSenderId: "985979451180",
  appId: "1:985979451180:web:88b4597918dd1fa8799e89"
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
//initializeApp(firebaseConfig);

// init firestore service
//const db = getFirestore()
const db = getFirestore(firebaseApp)
//export default db

// export reusable database references
export const moviesRef = collection(db, "movies")
