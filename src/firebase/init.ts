import { initializeApp } from "firebase/app"
import { Firestore, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FS_API_KEY,
  authDomain: import.meta.env.VITE_FS_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FS_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FS_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FS_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FS_APP_ID
}

const firebaseApp = initializeApp(firebaseConfig)

const db: Firestore = getFirestore(firebaseApp)
export default db
