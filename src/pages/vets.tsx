import type { NextPage } from "next";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import { useRouter } from "next/router";
import * as S from "../styles/vets.style";
import { Buttons } from "../components/buttons/buttons.component";

const Vet: NextPage = () => {
   return (
      <>
         <MainLayout bottomTitle="Vets near you" topChildren={<S.FrameVets />}>
            <Buttons vetsNavBtn={true} dark={true}>
               Open Now
            </Buttons>
            <Buttons vetsNavBtn={true} dark={true}>
               On Call
            </Buttons>
            <Buttons vetsNavBtn={true} dark={true}>
               Near You
            </Buttons>
         </MainLayout>
      </>
   );
};

export default Vet;
