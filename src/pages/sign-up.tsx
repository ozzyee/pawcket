/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import Logo from "../../public/dummy-logo.svg";
import { AuthScreen, TextHolder } from "../styles/global.style";
import { Text } from "../components/text/text.component";
import { SignUpForm } from "../layouts/sign-up-form/sign-up-form.component";
import { AuthDesktop } from "../layouts/auth-desktop/auth-desktop.component";
import { useRouter } from "next/router";

const SignUp: NextPage = () => {
   const router = useRouter();

   return (
      <>
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
                     Sign Up
                  </Text>
               </TextHolder>
            </AuthScreen>
         </MainLayout>
      </>
   );
};

export default SignUp;
