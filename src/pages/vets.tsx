/* eslint-disable no-unused-vars */
import type { NextApiRequest, NextPage } from "next";

import { Navbar } from "../components/navbar/navbar.component";
import { VetsInfo } from "../components/vets-info/vets-info.component";
import { useState, useEffect } from "react";
import { VetList, VetButtons } from "../styles/vets.style";
import { Separator } from "../components/separator/separator.component";
import { Text } from "../components/text/text.component";
import { PassportWrapper } from "../components/passport-wrapper/passport-wrapper.component";
import * as S from "../styles/vets.style";
import { AuthService } from "../lib/auth-service/auth.service";
import { doc, getDoc } from "firebase/firestore";
import { firestoreDB } from "../lib/firebase/firebase.initialize";
import { Buttons, Frame, MainLayout } from "../functions/dynamic-imports";

type TData = {
   id: number;
   name: string;
   phone: number;
   website: string;
   distance: string;
   address: string;
};

type TestType = TData[];

const Vet: NextPage = () => {
   const [vets, setVets] = useState<TestType>([]);

   async function getVets() {
      const response = await fetch("https://hub.dummyapis.com/vj/tuB6Lx7");
      const data = await response.json();
      console.log(data);
      setVets(data);
   }

   function getRandomWord() {
      const randomNumber = Math.floor(Math.random() * 7);
      switch (randomNumber) {
         case 0:
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
         default:
            return null;
      }
   }

   useEffect(() => {
      getVets();
   }, []);

   return (
      <>
         <S.Desktop>
            <MainLayout className="desktop" desktopCard={true}>
               <S.Top>
                  <S.TopRight>
                     <Navbar className="nav" />
                     <Text textType="h1" className="title">
                        Vets near you
                     </Text>
                     <Separator className="vets" />
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
                           <Buttons
                              vetsNavBtn={true}
                              dark={true}
                              onClick={() => {}}
                           >
                              Near You
                           </Buttons>
                        </li>
                     </VetButtons>
                  </S.TopRight>
                  <S.TopLeft>
                     <Frame
                        background="/frame.svg"
                        img="/circle/vet-circle.svg"
                        diameter={230}
                     />
                  </S.TopLeft>
               </S.Top>
               <S.Bottom>
                  <Separator className="vetsep" />
                  <PassportWrapper className="wrapper">
                     <VetList className="vetcard">
                        {vets.map((vet, index) => {
                           //Making random values for the API, so they dont look samey.
                           const randomPhone = Math.floor(Math.random() * 1000);
                           return (
                              <>
                                 <li key={index}>
                                    <VetsInfo
                                       vetName={
                                          "Dr. " +
                                          vet.name +
                                          "'s " +
                                          getRandomWord()
                                       }
                                       vetPhoneNumber={`0${randomPhone}  ${
                                          vet.phone
                                       }  ${randomPhone * 2}`}
                                       vetAddress={vet.address}
                                       vetWebsite={vet.website}
                                       vetDistance={vet.distance + " meters"}
                                    />
                                 </li>
                              </>
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
                     <Buttons vetsNavBtn={true} dark={true} onClick={() => {}}>
                        Near You
                     </Buttons>
                  </li>
               </VetButtons>
               <VetList className="vetcard">

                  {vets.map((vet, index) => {
                     //Making random values for the API, so they dont look samey.
                     // const randomPhone = Math.floor(Math.random() * 1000);
                     // const randomNoun = Math.floor(Math.random() * 3);
                     return (
                        <>
                           {/* <li key={index}>
                              <VetsInfo
                                 vetName={
                                    "Dr. " + vet.name + "'s " + getRandomWord()
                                 }
                                 vetPhoneNumber={`0${randomPhone}  ${
                                    vet.phone
                                 }  ${randomPhone * 2}`}
                                 vetAddress={vet.address}
                                 vetWebsite={vet.website}
                                 vetDistance={vet.distance}
                              />
                           </li> */}
                        </>
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

export async function getServerSideProps({ req }: { req: NextApiRequest }) {
   try {
      const cookieRefreshToken = req.cookies.token;
      const authService = new AuthService();
      const dataRes = await authService.getFirebaseUserToken(
         cookieRefreshToken
      );
      const userUID = dataRes.getIdToken.user_id;
      const docRef = doc(firestoreDB, "pets", userUID);
      const docSnap = await getDoc(docRef);
      // eslint-disable-next-line no-unused-vars
      const _data = docSnap.data();

      // No user then send to login/ sign up page
      if (!dataRes) {
         return {
            redirect: {
               destination: "/",
            },
         };
      }

      return {
         props: {
            userUID,
         },
      };
   } catch (err) {
      console.log("ERR", err);

      return {
         redirect: {
            destination: "/",
         },
      };
   }
}

export default Vet;
