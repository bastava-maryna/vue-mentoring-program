// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

}
export const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)

export const moviesRef = collection(db, "movies")
