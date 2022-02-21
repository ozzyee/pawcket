import type { NextPage } from "next";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import Logo from "../../public/dummy-logo.svg";
import { Buttons } from "../components/buttons/buttons.component";
import { LandingPage, TextHolder } from "../styles/global.style";
import { Text } from "../components/text/text.component";

const Home: NextPage = () => {
   return (
      <MainLayout
         topTitle="Pawcket"
         bottomTitle="Welcome!"
         topChildren={<Logo className="logo" />}
      >
         <LandingPage>
            <Buttons className="login-btn">Log in</Buttons>
            <Buttons className="login-btn" dark={true}>
               Sign up
            </Buttons>
            <TextHolder className="margin-top">
               <Text>by</Text>
               <Text className="bold landing-text">DREAM EPIC</Text>
            </TextHolder>
         </LandingPage>
      </MainLayout>
   );
};

export default Home;
