/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import type { NextApiRequest, NextPage } from "next";

import Logo from "../../public/dummy-logo.svg";
import { AuthScreen, TextHolder } from "../styles/global.style";
import { Text } from "../components/text/text.component";
import { useRouter } from "next/router";
import { AuthService } from "../lib/auth-service/auth.service";
import dynamic from "next/dynamic";
import { TAuthDesktopProps } from "../layouts/auth-desktop/auth-desktop.definition";
import {
   AuthDesktop,
   LoginForm,
   MainLayout,
} from "../functions/dynamic-imports";
import Head from "next/head";

const Login: NextPage = () => {
   const router = useRouter();

   return (
      <>
         <Head>
            <title>Pawcket | Login</title>
            <html lang="en" />
         </Head>
         <AuthDesktop
            className="desktop-display-block "
            form={<LoginForm />}
            title={"Welcome!"}
            subTitle={"Login"}
            footerText={"Don't have an account?"}
            footerTextBold={"Sign Up"}
         />

         <MainLayout
            topTitle="Pawcket"
            bottomTitle="Welcome!"
            topChildren={<Logo className="logo" />}
            bottomSubTitle="Login"
            className="desktop-display-none"
         >
            <AuthScreen>
               <LoginForm />
               <TextHolder className="margin-top auth-screen login">
                  <Text>Don't have an account?</Text>
                  <Text
                     className="bold landing-text"
                     onClick={() =>
                        router.push("/sign-up", undefined, { shallow: true })
                     }
                  >
                     Sign Up
                  </Text>
               </TextHolder>
            </AuthScreen>
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

      if (!dataRes) {
         return {
            props: {},
         };
      }

      return {
         redirect: {
            destination: "/user-profile",
         },
      };
   } catch (err) {
      return {
         props: {},
      };
   }
}

export default Login;
