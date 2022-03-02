import type { NextApiRequest, NextPage } from "next";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import Logo from "../../public/dummy-logo.svg";
import { Buttons } from "../components/buttons/buttons.component";
import { LandingPage, TextHolder } from "../styles/global.style";
import { Text } from "../components/text/text.component";
import { useRouter } from "next/router";
import { doc, getDoc } from "@firebase/firestore";
import { AuthService } from "../lib/auth-service/auth.service";
import { firestoreDB } from "../lib/firebase/firebase.initialize";

const Home: NextPage = () => {
   const router = useRouter();
   return (
      <>
         <MainLayout
            topTitle="Pawcket"
            bottomTitle="Welcome!"
            topChildren={<Logo className="logo" />}
         >
            <LandingPage>
               <Buttons
                  id="login-btn"
                  onClick={() =>
                     router.push("/login", undefined, { shallow: true })
                  }
               >
                  Log in
               </Buttons>
               <Buttons
                  id="login-btn"
                  className="login-btn landing-page-btn"
                  dark={true}
                  onClick={() =>
                     router.push("/sign-up", undefined, { shallow: true })
                  }
               >
                  Sign up
               </Buttons>
            </LandingPage>

            <TextHolder className="margin-top landing">
               <Text>by</Text>
               <Text className="bold landing-text">DREAM EPIC</Text>
            </TextHolder>
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
      // const userUID = dataRes.getIdToken.user_id;
      // const docRef = doc(firestoreDB, "pets", userUID);
      // const docSnap = await getDoc(docRef);
      // const _data = docSnap.data();

      console.log(dataRes);

      // No user then send to login/ sign up page
      if (dataRes) {
         return {
            redirect: {
               destination: "/create-user",
            },
         };
      }

      return {
         props: {},
      };
   } catch (err) {
      console.log("ERR", err);

      return {
         props: {},
      };
   }
}

export default Home;
