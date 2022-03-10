import type { NextApiRequest, NextApiResponse, NextPage } from "next";

import Logo from "../../public/dummy-logo.svg";
import { LandingPage, TextHolder } from "../styles/global.style";
import { Text } from "../components/text/text.component";
import { useRouter } from "next/router";
import { AuthService } from "../lib/auth-service/auth.service";
import { Buttons, MainLayout } from "../functions/dynamic-imports";
import Head from "next/head";

const Home: NextPage = () => {
   const router = useRouter();
   return (
      <>
         <Head>
            <title>Pawcket | Home</title>
            <html lang="en" />
         </Head>
         <MainLayout
            topTitle="Pawcket"
            bottomTitle="Welcome!"
            topChildren={<Logo className="logo" />}
         >
            <LandingPage>
               <Buttons
                  id="login-btn-1"
                  className="login-btn"
                  onClick={() =>
                     router.push("/login", undefined, { shallow: true })
                  }
               >
                  Log in
               </Buttons>
               <Buttons
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
      // const userUID = dataRes.getIdToken.user_id;
      // const docRef = doc(firestoreDB, "pets", userUID);
      // const docSnap = await getDoc(docRef);
      // const _data = docSnap.data();

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
