/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import type { NextApiRequest, NextPage } from "next";

import Logo from "../../public/dummy-logo.svg";
import { AuthScreen, TextHolder } from "../styles/global.style";
import { Text } from "../components/text/text.component";
import { useRouter } from "next/router";
import {
   AuthDesktop,
   LoginForm,
   MainLayout,
} from "../functions/dynamic-imports";
import Head from "next/head";

const SignIn: NextPage = () => {
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

export default SignIn;
