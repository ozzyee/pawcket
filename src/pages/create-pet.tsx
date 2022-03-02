/* eslint-disable no-unused-vars */
import { doc, getDoc } from "@firebase/firestore";
import { NextApiRequest, NextPage } from "next";
import { Frame } from "../components/frame/frame.component";
import { CreatePetForm } from "../layouts/creat-pet-form/creat-pet-form.component";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import { AuthService } from "../lib/auth-service/auth.service";
import { firestoreDB } from "../lib/firebase/firebase.initialize";

const CreatePet: NextPage = () => {
   return (
      <>
         <MainLayout desktopCard={true} className="desktop-display-block">
            <CreatePetForm />
         </MainLayout>

         <MainLayout
            topTitle="Upload Photo"
            bottomTitle="Welcome!"
            bottomSubTitle="create your pet"
            className="desktop-display-none"
            topChildren={<Frame background={"/frame.svg"} diameter={150} />}
         >
            <CreatePetForm />
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


      return {
         props: {
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

export default CreatePet;
