import * as firebaseAdmin from "firebase-admin";
// import { initializeFirebase } from "./firebase.initialize";

if (!firebaseAdmin.apps.length) {
   // initializeFirebase;
   firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert({
         privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY,
         clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
         projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      }),
   });
}

export { firebaseAdmin };
