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
   // this function signs the user out
   async signOut(): Promise<void> {
      // we use fetch service as we wont to use the post function
      const fetchService = new FetchService();
      // we post to are local api this endpoint clears the cookies§
      await fetchService.post("/api/log-out", {});
   }

   // this function signs the user up we use decoration for the email and password
   async signup({
      email,
      password,
   }: {
      // we give the email and password string types
      email: string;
      password: string;
   }): Promise<any> {
      // we try to sign the user in. we use try and catch to catch any errors in this process
      try {
         // we get a response from firebase when we create a user this will hold the user object
         const _res = await createUserWithEmailAndPassword(
            auth,
            email,
            password
         );
         // we have to use type casting as the refresh token isn't on the UserCredential type definition.
         // note: we have to extend the UserCredential type.
         const res = _res as TUserCredential;
         const refreshToken = res.user.stsTokenManager.refreshToken;
         const userID = res.user.uid;

         // as we wont to save the users email and uid we set the object hear
         const userData = {
            email,
            userID,
         };
         // we save the users data to firebase with set doc.
         // note: set doc is from firebases sdk.
         await setDoc(doc(firestoreDB, "users", userID), userData);
         // we then create a new instance of are fetch service as we will need to post to are local db to set the users cookie.
         // note: this will start the session
         const fetchService = new FetchService();
         // we then post to are local api to set the user
         await fetchService.post("/api/auth", { refreshToken });
         // when the user has started there session wee redirect them to create user as they are a new user
         window.location.href = "/create-user";
      } catch (err) {
         // if there are any errors we typecast the error
         // note: type casting gives the error a type in this case its an 'Error'
         const error = err as Error;
         // if there was an error we return the error message
         return error?.message;
      }
   }

   // this function signs the user in with email and password
   async signinPassword({
      email,
      password,
   }: {
      // we give the email and password a types in this case they are 'string'
      email: string;
      password: string;
   }): Promise<any> {
      // we then try to sign the user in and if there are any errors we catch the error
      try {
         // we then call the sign in function from firebase and get the users data object and store it in
         // note: we have to extend the UserCredential type.
         const _res = await signInWithEmailAndPassword(auth, email, password);
         const res = _res as TUserCredential;
         const refreshToken = res.user.stsTokenManager.refreshToken;
         // we then create a new instance of are fetch service as we will need to post to are local db to set the users cookie.
         // note: this will start the session
         const fetchService = new FetchService();
         // we then post to are local api to set the user
         await fetchService.post("/api/auth", { refreshToken });
         // when the user has started there session wee redirect them to there profile
         window.location.href = "/user-profile";
      } catch (err) {
         // if there are any errors we typecast the error
         // note: type casting gives the error a type in this case its an 'Error'
         const error = err as Error;
         // if there was an error we return the error message
         return error?.message;
      }
   }

   // this function is for the google sign in we have a to pass in the location as the user may be signing up or sighing in
   async googleSignIn(location: string | undefined): Promise<void> {
      // we try to sign the user in and if there were any errors we catch them
      try {
         // we call the provider in this case its google
         const provider = new GoogleAuthProvider();
         // as the way we sign the user in is with a pop up we specify that here and pass in the auth and the provider
         const _res = await signInWithPopup(auth, provider);
         // we type cast the response as we extend the types
         const res = _res as TUserCredential;
         // we then grab the refresh token as firebase has to refer to this for are session
         const refreshToken = res.user.stsTokenManager.refreshToken;
         // we also grab the users uid as well as we wont to save this to are database
         const userID = res.user.uid;

         // we get the users data form google sign in as we wont to get some data to save to are database
         const docRef = doc(firestoreDB, "users", userID);
         const docSnap = await getDoc(docRef);
         const _data = docSnap.data();

         // we then make are data objet to save to are database
         const userData = {
            ..._data,
            userID,
            firstName: res._tokenResponse.firstName,
            lastName: res._tokenResponse.lastName,
            email: res.user.email,
            userImage: res.user.reloadUserInfo.photoUrl,
         };

         // once we have are object we then save it to are database
         await setDoc(doc(firestoreDB, "users", userID), userData);
         // once this is saved we then start the users session
         const fetchService = new FetchService();
         // we then set the cookie
         await fetchService.post("/api/auth", { refreshToken });

         // if the location we pass in was login we will send the user to there database
         if (location === "login") {
            window.location.href = "/user-profile";
            return;
         }
         // else we will send the user to create user
         window.location.href = "/create-user";
      } catch (err) {
         // if we have any errors we log them
         console.log("this was the error ->", err);
      }
   }
   // this is for the facebook sign in
   async facebookSignIn(location: string | undefined): Promise<void> {
      // we try to sign the user in and if there were any errors we catch them
      try {
         // we call the provider in this case its facebook
         const provider = new FacebookAuthProvider();
         // as the way we sign the user in is with a pop up we specify that here and pass in the auth and the provider
         const _res = await signInWithPopup(auth, provider);
         // we type cast the response as we extend the types
         const res = _res as TUserCredential;
         // we then grab the refresh token as firebase has to refer to this for are session
         const refreshToken = res.user.stsTokenManager.refreshToken;
         // we also grab the users uid as well as we wont to save this to are database
         const userID = res.user.uid;

         // we get the users data from the facebook provider
         const facebookCredential =
            FacebookAuthProvider.credentialFromResult(res);
         // we grab the accessToken as this is how we set the users session with the cookie
         const accessToken = facebookCredential?.accessToken;
         // as we wont the users image we use the facebook's api
         const userImage = `https://graph.facebook.com/me/picture?height=400&width=400&access_token=${accessToken}`;

         // we then make are data objet to save to are database
         const userData = {
            userID,
            firstName: res._tokenResponse.firstName,
            lastName: res._tokenResponse.lastName,
            email: res.user.email,
            userImage: userImage,
         };
         // once we have are object we then save it to are database
         await setDoc(doc(firestoreDB, "users", userID), userData);
         // once this is saved we then start the users session
         const fetchService = new FetchService();
         // we then set the cookie
         await fetchService.post("/api/auth", { refreshToken });

         // if the location we pass in was login we will send the user to there database
         if (location === "login") {
            window.location.href = "/user-profile";
            return;
         }
         // else we will send the user to create user
         window.location.href = "/create-user";
      } catch (err) {
         // if we have any errors we log them
         console.log("this was the error ->", err);
      }
   }

   //  this function is to get a new Id Token as firebase refresh this every hour for security reasons
   async getFirebaseUserToken(userToken: string) {
      // we set the get user token url endpoint into a variable
      const firebaseGetTokenUrl = `https://securetoken.googleapis.com/v1/token?key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`;
      // we then make an instance of are fetch service as we will have to post to the endpoint to get the id token
      const fetchService = new FetchService();
      // if there isn't a cookie / refresh token we will throw an error
      if (!userToken) throw new Error("no data");

      // we then post to the firebaseGetTokenUrl endpoint to get the id token
      const getIdToken = await fetchService.post(firebaseGetTokenUrl, {
         grant_type: "refresh_token",
         refresh_token: userToken,
      });
      // if there was an error we will throw the error with the error message
      if (getIdToken?.error) {
         const errMsg = getIdToken?.error.message;
         throw new Error(errMsg);
      }
      // if all went well we will return the id token
      return { getIdToken };
   }
}
