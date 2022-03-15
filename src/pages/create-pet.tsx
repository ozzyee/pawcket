import { doc, getDoc } from "@firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { Frame } from "../components/frame/frame.component";
import {
   CreatePetForm,
   ImageUploader,
   MainLayout,
   Navbar,
} from "../functions/dynamic-imports";
import { AuthService } from "../lib/auth-service/auth.service";
import { firestoreDB } from "../lib/firebase/firebase.initialize";
import Head from "next/head";
import { TCreatePetPage } from "../types/create-pet-page";
import { useRef, useState } from "react";

const CreatePet = ({ userUID, _data }: TCreatePetPage) => {
   const hiddenImageUploader = useRef(null);
   const [image, setImage] = useState<null | string>(null);

   const uploadImage = () => {
      // @ts-ignore
      hiddenImageUploader.current?.click() as React.MutableRefObject<null>;
   };
   return (
      <>
         <Head>
            <title>Pawcket | Create Pet</title>
            <html lang="en" />
         </Head>

         <MainLayout desktopCard={true} className="desktop-display-block">
            <Navbar className="nav-desktop" />
            <CreatePetForm userUID={userUID} _data={_data} />
         </MainLayout>

         <MainLayout
            topTitle="Upload Photo"
            bottomTitle="Welcome!"
            bottomSubTitle="create your pet"
            className="desktop-display-none"
            topChildren={
               <>
                  <Frame
                     background={"/frame.svg"}
                     diameter={150}
                     img={image}
                     onClick={uploadImage}
                  />
                  <ImageUploader
                     _ref={hiddenImageUploader}
                     onChange={(imgUrl) => {
                        setImage(imgUrl);
                     }}
                     folder={`/${userUID}/pets`}
                  />
               </>
            }
         >
            <div id="mobile-wrapper" className="extra-padding">
               <CreatePetForm
                  userUID={userUID}
                  _data={_data}
                  uploadImage={image ? image : ""}
               />
               <div style={{ height: " 23vh" }}></div>
            </div>
            <Navbar className="nav" />
         </MainLayout>
      </>
   );
};

export async function getServerSideProps({
   req,
   res,
}: {
   req: NextApiRequest;
   res: NextApiResponse;
}) {
   res.setHeader(
      "Cache-Control",
      "public, s-maxage=43200, stale-while-revalidate=60"
   );
   try {
      const cookieRefreshToken = req.cookies.token;
      const authService = new AuthService();
      const dataRes = await authService.getFirebaseUserToken(
         cookieRefreshToken
      );
      const userUID = dataRes.getIdToken.user_id;
      const docRef = doc(firestoreDB, "pets", userUID);
      const docSnap = await getDoc(docRef);
      const _data = docSnap.data();

      // No user then send to login/ sign up page
      if (!dataRes) {
         return {
            redirect: {
               destination: "/",
            },
         };
      }

      if (!_data) {
         return {
            props: {
               userUID,
            },
         };
      }

      return {
         props: {
            userUID,
            _data,
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

export default CreatePet;
