/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import Logo from "../../public/dummy-logo.svg";
import { LoginForm } from "../layouts/log-in-form/log-in-form.component";
import { AuthScreen, TextHolder } from "../styles/global.style";
import { Text } from "../components/text/text.component";
import { AuthDesktop } from "../layouts/auth-desktop/auth-desktop.component";
import { useRouter } from "next/router";
import { CrossFrameUser } from "../styles/create-user.style";

const CreateUser: NextPage = () => {
   const router = useRouter();

   return (
      <>
         <MainLayout
            topTitle="Pawcket"
            bottomTitle="Welcome!"
            topChildren={<CrossFrameUser />}
            // bottomSubTitle="Login"
            // className="desktop-display-none"
         ></MainLayout>

         <MainLayout
            desktopCard={true}
            className="desktop-display-block"
         ></MainLayout>
      </>
   );
};

export default CreateUser;
