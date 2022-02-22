/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import Logo from "../../public/dummy-logo.svg";
import { LoginForm } from "../layouts/log-in-form/log-in-form.component";
import { AuthScreen, TextHolder } from "../styles/global.style";
import { Text } from "../components/text/text.component";

const Login: NextPage = () => {
   return (
      <>
         <MainLayout
            topTitle="Pawcket"
            bottomTitle="Welcome!"
            topChildren={<Logo className="logo" />}
            bottomSubTitle="Login"
         >
            <AuthScreen>
               <LoginForm />
               <TextHolder className="margin-top auth-screen">
                  <Text>Don't have an account?</Text>
                  <Text className="bold landing-text">Sign Up</Text>
               </TextHolder>
            </AuthScreen>
         </MainLayout>
      </>
   );
};

export default Login;
