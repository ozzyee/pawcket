/* eslint-disable react/no-unescaped-entities */
import type { NextApiRequest, NextPage } from "next";
import Logo from "../../public/dummy-logo.svg";
import { AuthScreen, TextHolder } from "../styles/global.style";
import { Text } from "../components/text/text.component";
import { useRouter } from "next/router";
import { AuthService } from "../lib/auth-service/auth.service";
import { AuthDesktop, MainLayout, SignUpForm } from "../functions/dynamic-imports";
import Head from "next/head";

const SignUp: NextPage = () => {
   const router = useRouter();

   return (
      <>
         <Head>
            <title>Pawcket | Sign Up</title>
            <html lang="en" />

         </Head>

         <AuthDesktop
            className="desktop-display-block "
            form={<SignUpForm />}
            title={"Welcome!"}
            subTitle={"Sign up"}
            footerText={"Don't have an account?"}
            footerTextBold={"Sign Up"}
         />

         <MainLayout
            topTitle="Pawcket"
            bottomTitle="Welcome!"
            topChildren={<Logo className="logo" />}
            bottomSubTitle="Sign up"
            className="desktop-display-none"
         >
            <AuthScreen>
               <SignUpForm className="login-form" />
               <TextHolder className="margin-top auth-screen">
                  <Text>Don't have an account?</Text>
                  <Text
                     className="bold landing-text"
                     onClick={() =>
                        router.push("/login", undefined, { shallow: true })
                     }
                  >
                     Login
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
            destination: "/create-user",
         },
      };
   } catch (err) {
      return {
         props: {},
      };
   }
}

export default SignUp;
