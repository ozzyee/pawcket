import { doc, getDoc } from "@firebase/firestore";
import { NextApiRequest } from "next";
import { Frame } from "../components/frame/frame.component";
import { CreateProfileForm } from "../layouts/create-profiles-form/create-profiles.component";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import { AuthService } from "../lib/auth-service/auth.service";
import { firestoreDB } from "../lib/firebase/firebase.initialize";
import { TCreateUserPage } from "../types/create-user-definition";

const CreateUser = ({ data, userUID }: TCreateUserPage) => {
   return (
      <>
         <MainLayout desktopCard={true} className="desktop-display-block">
            <CreateProfileForm dateObject={data} userUID={userUID} />
         </MainLayout>

         <MainLayout
            topTitle="Upload Photo"
            bottomTitle="Welcome!"
            className="desktop-display-none"
            topChildren={<Frame background={"/frame.svg"} diameter={150} />}
         >
            <CreateProfileForm dateObject={data} userUID={userUID} />
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
      const data = docSnap.data();

      if (!dataRes) {
         return {
            redirect: {
               destination: "/",
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
      return {
         redirect: {
            destination: "/",
         },
      };
   }
}

export default CreateUser;
