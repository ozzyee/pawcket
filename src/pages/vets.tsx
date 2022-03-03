import type { NextPage } from "next";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import { useRouter } from "next/router";
import * as S from "../styles/vets.style";
import { Buttons } from "../components/buttons/buttons.component";
import { Navbar } from "../components/navbar/navbar.component";
import { VetsInfo } from "../components/vets-info/vets-info.component";
import { useState, useEffect } from "react";
import { VetList, VetButtons } from "../styles/vets.style";
import { Frame } from "../components/frame/frame.component";
import { Return } from "../components/return-button/returnbutton.component";
import { VetNav } from "../styles/vets.style";
import { Top } from "../layouts/main-layout/main-layout.style";
import {Separator} from "../components/separator/separator.component"
import {Text} from "../components/text/text.component"
import { PassportWrapper } from "../components/passport-wrapper/passport-wrapper.component";

const Vet: NextPage = () => {

   const [vets, setVets] = useState([]);


   async function getVets(){
      const response = await fetch("https://hub.dummyapis.com/vj/tuB6Lx7");
      const data = await response.json();
      console.log(data);
      setVets(data);
   }

   function getRandomWord(){
      const randomNumber = Math.floor(Math.random() * 7);
      switch(randomNumber){
         case 0 :
            return "Clinic";
         case 1:
            return "Practice";
         case 2:
            return "Vets";
         case 3:
            return "Walk-in";
         case 4:
            return "Services";
         case 5:
            return "Veterinary";
         case 6:
            return "Pet Hospital";
         default :
            return null;
      }
   }


   useEffect(()=>{
      getVets();
   }, [])


   return (
      <>
         <S.Desktop>
            <MainLayout className="desktop" desktopCard={true}>
               <S.Top>
               <h1 onClick={getVets}>CLICK ME FOR VETS!!!!!!!!</h1>
               <S.TopRight>
               <Navbar className="nav" />
               <Text textType="h1" className="title">Vets near you</Text>
               <Separator className="vets"/>
               <VetButtons className="vetbuttons">
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
                     <Buttons vetsNavBtn={true} dark={true} onClick={()=>{
                     }}>
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
                     //Making random values for the API, so they dont look samey.
                     const randomPhone = Math.floor(Math.random() * 1000)
                     return (
                        <li key={index}>
                           <VetsInfo
                              vetName={"Dr. " + vet.name + "'s " + getRandomWord()}
                              vetPhoneNumber={`0${randomPhone}  ${vet.phone}  ${randomPhone * 2}`}
                              vetAddress={vet.address}
                              vetWebsite={vet.website}
                              vetDistance={vet.distance + " meters"}
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
                     <Buttons vetsNavBtn={true} dark={true} onClick={()=>{
                     }}>
                        Near You
                     </Buttons>
                  </li>
               </VetButtons>
               <VetList className="vetcard">
               {vets.map((vet, index) => {
                     //Making random values for the API, so they dont look samey.
                     const randomPhone = Math.floor(Math.random() * 1000)
                     const randomNoun = Math.floor(Math.random() * 3);
                     return (
                        <li key={index}>
                           <VetsInfo
                              vetName={"Dr. " + vet.name + "'s " + getRandomWord()}
                              vetPhoneNumber={`0${randomPhone}  ${vet.phone}  ${randomPhone * 2}`}
                              vetAddress={vet.address}
                              vetWebsite={vet.website}
                              vetDistance={vet.distance}
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
