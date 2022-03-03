import type { NextApiRequest, NextPage } from "next";
import { MainLayout } from "../layouts/main-layout/main-layout.component";

import { Navbar } from "../components/navbar/navbar.component";
import { useState } from "react";
import { VetList, VetButtons } from "../layouts/main-layout/main-layout.style";
import { AuthService } from "../lib/auth-service/auth.service";
import { doc, getDoc } from "@firebase/firestore";
import { firestoreDB } from "../lib/firebase/firebase.initialize";
import { Buttons, Frame } from "../functions/dynamic-imports";
import dynamic from "next/dynamic";
import { TVetsInfoProps } from "../components/vets-info/vets-info.definition";
import Head from "next/head";

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
   ];
   // eslint-disable-next-line no-unused-vars
   const [vets, setVets] = useState(initialState);

   const VetsInfo = dynamic<TVetsInfoProps>(
      () =>
         import("../components/vets-info/vets-info.component").then(
            (module) => module.VetsInfo
         ) as any
   );

   // Buttons

   return (
      <>
         <Head>
            <title>Pawcket | Vets</title>
         </Head>

         <MainLayout
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
         </MainLayout>
         <Navbar />

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
