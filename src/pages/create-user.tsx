import { doc, getDoc } from "@firebase/firestore";
import { NextApiRequest } from "next";
import { useRef, useState, useEffect } from "react";
import {
   CreateProfileForm,
   Frame,
   ImageUploader,
   MainLayout,
} from "../functions/dynamic-imports";
import { AuthService } from "../lib/auth-service/auth.service";
import { firestoreDB } from "../lib/firebase/firebase.initialize";
import { TCreateUserPage } from "../types/create-user-definition";
import Head from "next/head";

const CreateUser = ({ data, userUID }: TCreateUserPage) => {
   // this is for the hidden image uploader if a button is clicked if will open the uploader
   const hiddenImageUploader = useRef(null);
   const [image, setImage] = useState("");

   const uploadImage = () => {
      // @ts-ignore
      // we call the ref and set it as clicked this opens the file finder
      hiddenImageUploader.current?.click() as React.MutableRefObject<null>;
   };

   useEffect(() => {
      // if there is an image in the data we set the image in are user state
      if (data?.userImage) setImage(data?.userImage);
   }, [data]);

   console.log(image);

   return (
      <>
         <Head>
            <title>Pawcket | Create User</title>
            <html lang="en" />
         </Head>

         <MainLayout desktopCard={true} className="desktop-display-block">
            <CreateProfileForm dateObject={data} userUID={userUID} />
         </MainLayout>

         <MainLayout
            topTitle="Upload Photo"
            bottomTitle="Welcome!"
            className="desktop-display-none"
            topChildren={
               <>
                  <Frame
                     background={"/frame.svg"}
                     diameter={150}
                     img={image ? image : ""}
                     onClick={uploadImage}
                  />
                  <ImageUploader
                     _ref={hiddenImageUploader}
                     onChange={(imgUrl) => {
                        setImage(imgUrl);
                     }}
                     folder={`/${userUID}`}
                  />
               </>
            }
         >
            <div id="mobile-wrapper" className="extra-padding">
               <CreateProfileForm
                  dateObject={data}
                  userUID={userUID}
                  uploadImage={image}
               />
            </div>
         </MainLayout>
      </>
   );
};

export async function getServerSideProps({ req }: { req: NextApiRequest }) {
   try {
      const cookieRefreshToken = req.cookies.token;
      const authService = new AuthService();
      const dataRes = await authService.getFirebaseUserToken(
         cookieRefreshToken
      );
      const userUID = dataRes.getIdToken.user_id;
      const docRef = doc(firestoreDB, "users", userUID);
      const docSnap = await getDoc(docRef);
      const _data = docSnap.data();
      const data = _data;

      // No user then send to login/ sign up page
      if (!dataRes) {
         return {
            redirect: {
               destination: "/",
            },
         };
      }

      if (data?.firstName && data?.lastName && data?.DOB) {
         return {
            redirect: {
               destination: "/user-profile",
            },
         };
      }

      if (!data) {
         return {
            props: {
               userUID,
            },
         };
      }

      // If user and date is set in db set the date in object
      if (_data?.DOB) {
         const data = {
            ..._data,
            DOB: JSON.stringify(_data?.DOB.toDate()),
         };

         return {
            props: {
               data,
               userUID,
            },
         };
      }

      return {
         props: {
            data,
            userUID,
         },
      };
   } catch (err) {
      console.log("ERR", err);

      return {
         redirect: {
            destination: "/",
         },
      };
   }
}

export default CreateUser;
