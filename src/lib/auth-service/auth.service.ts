import { auth, firestoreDB } from "../../lib/firebase/firebase.initialize";
import { setDoc, doc, getDoc } from "firebase/firestore";

import {
   createUserWithEmailAndPassword,
   FacebookAuthProvider,
   GoogleAuthProvider,
   signInWithEmailAndPassword,
   signInWithPopup,
   UserCredential,
} from "firebase/auth";
import { IAuthContract } from "./auth.contract";
import { FetchService } from "../fetch-service/fetch.service";

type TUserCredential = UserCredential & {
   _tokenResponse: {
      firstName: string;
      lastName: string;
   };
   user: {
      reloadUserInfo: {
         photoUrl: string;
      };
      stsTokenManager: {
         refreshToken: string;
      };
   };
};

export class AuthService implements IAuthContract {
   async signOut(): Promise<void> {
      const fetchService = new FetchService();
      await fetchService.post("/api/log-out", {});
   }

   async signup({
      email,
      password,
   }: {
      email: string;
      password: string;
   }): Promise<any> {
      try {
         const _res = await createUserWithEmailAndPassword(
            auth,
            email,
            password
         );
         const res = _res as TUserCredential;
         const refreshToken = res.user.stsTokenManager.refreshToken;
         const userID = res.user.uid;

         const userData = {
            email,
            userID,
         };
         await setDoc(doc(firestoreDB, "users", userID), userData);
         const fetchService = new FetchService();
         await fetchService.post("/api/auth", { refreshToken });
         window.location.href = "/create-user";
      } catch (err) {
         const error = err as Error;
         return error?.message;
      }
   }

   async signinPassword({
      email,
      password,
   }: {
      email: string;
      password: string;
   }): Promise<any> {
      try {
         const _res = await signInWithEmailAndPassword(auth, email, password);
         const res = _res as TUserCredential;

         const refreshToken = res.user.stsTokenManager.refreshToken;

         const fetchService = new FetchService();
         await fetchService.post("/api/auth", { refreshToken });
         window.location.href = "/user-profile";
      } catch (err) {
         const error = err as Error;
         return error.message;
      }
   }

   async googleSignIn(location: string | undefined): Promise<void> {
      try {
         const provider = new GoogleAuthProvider();
         const _res = await signInWithPopup(auth, provider);
         const res = _res as TUserCredential;
         const refreshToken = res.user.stsTokenManager.refreshToken;
         const userID = res.user.uid;

         const docRef = doc(firestoreDB, "users", userID);
         const docSnap = await getDoc(docRef);
         const _data = docSnap.data();
         const data = _data;

         const userData = {
            ...data,
            userID,
            firstName: res._tokenResponse.firstName,
            lastName: res._tokenResponse.lastName,
            email: res.user.email,
            userImage: res.user.reloadUserInfo.photoUrl,
         };

         await setDoc(doc(firestoreDB, "users", userID), userData);
         const fetchService = new FetchService();
         await fetchService.post("/api/auth", { refreshToken });

         if (location === "login") {
            window.location.href = "/user-profile";
            return;
         }
         window.location.href = "/create-user";
      } catch (err) {
         console.log("this was the error ->", err);
      }
   }

   async facebookSignIn(location: string | undefined): Promise<void> {
      try {
         const provider = new FacebookAuthProvider();
         const _res = await signInWithPopup(auth, provider);
         const res = _res as TUserCredential;
         const refreshToken = res.user.stsTokenManager.refreshToken;
         const userID = res.user.uid;

         const facebookCredential =
            FacebookAuthProvider.credentialFromResult(res);
         const accessToken = facebookCredential?.accessToken;
         const userImage = `https://graph.facebook.com/me/picture?height=400&width=400&access_token=${accessToken}`;

         const userData = {
            userID,
            firstName: res._tokenResponse.firstName,
            lastName: res._tokenResponse.lastName,
            email: res.user.email,
            userImage: userImage,
         };
         await setDoc(doc(firestoreDB, "users", userID), userData);
         const fetchService = new FetchService();
         await fetchService.post("/api/auth", { refreshToken });

         if (location === "login") {
            window.location.href = "/user-profile";
            return;
         }
         window.location.href = "/create-user";
      } catch (err) {
         console.log("this was the error ->", err);
      }
   }

   //* refresh token function
   async getFirebaseUserToken(userToken: string) {
      const firebaseGetTokenUrl = `https://securetoken.googleapis.com/v1/token?key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`;
      const fetchService = new FetchService();

      if (!userToken) throw new Error("no data");

      const getIdToken = await fetchService.post(firebaseGetTokenUrl, {
         grant_type: "refresh_token",
         refresh_token: userToken,
      });

      if (getIdToken?.error) {
         const errMsg = getIdToken?.error.message;
         throw new Error(errMsg);
      }

      return { getIdToken };
   }
}
