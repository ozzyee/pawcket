import type { NextPage } from "next";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import { useRouter } from "next/router";
import * as S from "../styles/vets.style";
import { Buttons } from "../components/buttons/buttons.component";
import { Navbar } from "../components/navbar/navbar.component";
import { VetsInfo } from "../components/vets-info/vets-info.component";
import { useState } from "react";
import { VetList, VetButtons } from "../styles/vets.style";
import { Frame } from "../components/frame/frame.component";
import { Return } from "../components/return-button/returnbutton.component";
import { VetNav } from "../styles/vets.style";
import { Top } from "../layouts/main-layout/main-layout.style";
import {Separator} from "../components/separator/separator.component"
import {Text} from "../components/text/text.component"
import { PassportWrapper } from "../components/passport-wrapper/passport-wrapper.component";

const Vet: NextPage = () => {
   const initialState = [
      {
         name: "sdsd",
         phoneNumber: "9239238",
         vetAddress: "i92ijwdioj",
         vetWebsite: "sidjsidj",
      },
      {
         name: "sdsd",
         phoneNumber: "9239238",
         vetAddress: "i92ijwdioj",
         vetWebsite: "sidjsidj",
      },
      {
         name: "sdsd",
         phoneNumber: "9239238",
         vetAddress: "i92ijwdioj",
         vetWebsite: "sidjsidj",
      },
      {
         name: "sdsd",
         phoneNumber: "9239238",
         vetAddress: "i92ijwdioj",
         vetWebsite: "sidjsidj",
      },
      {
         name: "sdsd",
         phoneNumber: "9239238",
         vetAddress: "i92ijwdioj",
         vetWebsite: "sidjsidj",
      },
      {
         name: "sdsd",
         phoneNumber: "9239238",
         vetAddress: "i92ijwdioj",
         vetWebsite: "sidjsidj",
      },

      {
         name: "sdsd",
         phoneNumber: "9239238",
         vetAddress: "i92ijwdioj",
         vetWebsite: "sidjsidj",
      },
      {
         name: "sdsd",
         phoneNumber: "9239238",
         vetAddress: "i92ijwdioj",
         vetWebsite: "sidjsidj",
      },
      {
         name: "sdsd",
         phoneNumber: "9239238",
         vetAddress: "i92ijwdioj",
         vetWebsite: "sidjsidj",
      },
   ];
   const [vets, setVets] = useState(initialState);
   return (
      <>
         <S.Desktop>
            <MainLayout className="desktop" desktopCard={true}>
               <S.Top>
               <S.TopRight>
               <Navbar className="nav" />
               <Text textType="h1" className="title">Vets near you</Text>
               <Separator className="vets"/>
               <VetButtons className="vetbuttons">                 <li>
                     <Buttons vetsNavBtn={true} dark={true}>
                        Open Now
                     </Buttons>
                  </li>
                  <li>
                     <Buttons vetsNavBtn={true} dark={true}>
                        On Call
                     </Buttons>
                  </li>
                  <li>
                     <Buttons vetsNavBtn={true} dark={true}>
                        Near You
                     </Buttons>
                  </li>
               </ VetButtons>
               </S.TopRight>
               <S.TopLeft>
                  <Frame background="/frame.svg" img="/circle/vet-circle.svg" diameter={230}/>
               </S.TopLeft>
               </S.Top>
               <S.Bottom>
                  <Separator className="vetsep"/>
                  <PassportWrapper className="wrapper">
                  <VetList className="vetcard">
                  {vets.map((vet, index) => {
                     return (
                        <li key={index}>
                           <VetsInfo
                              vetName={vet.name}
                              vetPhoneNumber={vet.phoneNumber}
                              vetAddress={vet.vetAddress}
                              vetWebsite={vet.vetWebsite}
                           />
                        </li>
                     );
                  })}
               </VetList>
                  </PassportWrapper>
               </S.Bottom>
            </MainLayout>
         </S.Desktop>
         <S.Mobile>
            <MainLayout
               className="mobile"
               bottomTitle="Vets near you"
               topChildren={
                  <Frame
                     background={"/frame.svg"}
                     img={"/circle/vet-circle.svg"}
                     diameter={230}
                  />
               }
            >
               <VetButtons>
               <li>
                     <Buttons vetsNavBtn={true} dark={true}>
                        Open Now
                     </Buttons>
                  </li>
                  <li>
                     <Buttons vetsNavBtn={true} dark={true}>
                        On Call
                     </Buttons>
                  </li>
                  <li>
                     <Buttons vetsNavBtn={true} dark={true}>
                        Near You
                     </Buttons>
                  </li>
               </VetButtons>
               <VetList className="vetcard">
                  {vets.map((vet, index) => {
                     return (
                        <li key={index}>
                           <VetsInfo
                              vetName={vet.name}
                              vetPhoneNumber={vet.phoneNumber}
                              vetAddress={vet.vetAddress}
                              vetWebsite={vet.vetWebsite}
                           />
                        </li>
                     );
                  })}
               </VetList>

               <Navbar className="nav" />
            </MainLayout>
         </S.Mobile>
         {/* Desktop Version */}
         {/* <MainLayout>
            <VetList>
               {vets.map((vet, index) => {
                  return (
                     <li>
                        <VetsInfo
                           vetName={vet.name}
                           vetPhoneNumber={vet.phoneNumber}
                           vetAddress={vet.vetAddress}
                           vetWebsite={vet.vetWebsite}
                           key={index}
                        />
                     </li>
                  );
               })}
            </VetList>
         </MainLayout> */}
      </>
   );
};

export default Vet;
