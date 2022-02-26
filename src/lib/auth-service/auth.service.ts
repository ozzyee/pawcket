import { auth, firestoreDB } from "../../lib/firebase/firebase.initialize";
import { setDoc, doc } from "firebase/firestore";

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
         // window.location.href = "/messaging";
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
      } catch (err) {
         const error = err as Error;
         return error.message;
      }
   }

   async googleSignIn(): Promise<void> {
      try {
         const provider = new GoogleAuthProvider();
         const _res = await signInWithPopup(auth, provider);
         const res = _res as TUserCredential;
         const refreshToken = res.user.stsTokenManager.refreshToken;
         const userID = res.user.uid;

         const userData = {
            userID,
            firstName: res._tokenResponse.firstName,
            lastName: res._tokenResponse.lastName,
            email: res.user.email,
            userImage: res.user.reloadUserInfo.photoUrl,
         };

         await setDoc(doc(firestoreDB, "users", userID), userData);
         const fetchService = new FetchService();
         await fetchService.post("/api/auth", { refreshToken });
      } catch (err) {
         console.log("this was the error ->", err);
      }
   }

   async facebookSignIn(): Promise<void> {
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
      } catch (err) {
         console.log("this was the error ->", err);
      }
   }

   //! DONT DELETE THIS THIS IS VERY IMPORTANT
   //* refresh token function
   // async getFirebaseUserData(userToken: string) {
   //    const firebaseGetTokenUrl = `https://securetoken.googleapis.com/v1/token?key=${process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY}`;
   //    const fetchService = new FetchService();

   //    if (!userToken) throw new Error("no data");

   //    const getIdToken = await fetchService.post(firebaseGetTokenUrl, {
   //       grant_type: "refresh_token",
   //       refresh_token: userToken,
   //    });

   //    if (getIdToken?.error) {
   //       const errMsg = getIdToken?.error.message;
   //       throw new Error(errMsg);
   //    }

   //    const getUserObject = await fetchService.get(
   //       Urls["users-base-url"] + getIdToken.user_id
   //    );

   //    return { getUserObject, getIdToken };
   // }
}
