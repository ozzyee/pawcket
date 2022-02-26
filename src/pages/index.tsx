import type { NextPage } from "next";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import Logo from "../../public/dummy-logo.svg";
import { Buttons } from "../components/buttons/buttons.component";
import { LandingPage, TextHolder } from "../styles/global.style";
import { Text } from "../components/text/text.component";
import { useRouter } from "next/router";

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

export default Home;
