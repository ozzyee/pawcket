import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const FIREBASE_CONFIG = {
   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
   // databaseURL: `https://social-media-68abd-default-rtdb.europe-west1.firebasedatabase.app/`,
   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
   clientId: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_ID,
};

const app = initializeApp(FIREBASE_CONFIG);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const firestoreDB = getFirestore(app)

