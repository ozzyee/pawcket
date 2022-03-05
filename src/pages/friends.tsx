/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import { collection, getDocs } from "@firebase/firestore";
import type { NextApiRequest } from "next";
import { useEffect, useState } from "react";
import { FormInputs } from "../components/form-inputs/form-inputs.component";
import { FriendsModal } from "../components/friends-modal/friends-modal.component";

import { Navbar } from "../components/navbar/navbar.component";
import { Frame, MainLayout } from "../functions/dynamic-imports";
import { AuthService } from "../lib/auth-service/auth.service";
import { firestoreDB } from "../lib/firebase/firebase.initialize";
import { FriendsPageWrapper } from "../styles/global.style";
import * as S from "../styles/vets.style";

type TUserData = {
   DOB: string;
   address: string;
   email: string;
   extraInfo: string;
   firstName: string;
   lastName: string;
   postCode: string;
   tel: string;
   userID: string;
   userImage: string;
   fullName: string;
   fullNameReverse: string;
   userName: string;
};

type TFriendsData = {
   data: TUserData[];
   userUID?: string;
};

const Friends = ({ data, userUID }: TFriendsData) => {
   const [results, setResults] = useState<TUserData[]>([]);

   const searchUser = (text: string) => {
      const searchResults = data.filter(
         ({ fullName, fullNameReverse, userName }) => {
            const fullNameLowercase = fullName.toLowerCase();
            const fullNameReverseLowercase = fullNameReverse.toLowerCase();
            const usernameToLowercase = userName?.toLowerCase();

            return (
               fullNameLowercase.startsWith(text.toLowerCase()) ||
               fullNameReverseLowercase.startsWith(text.toLowerCase()) ||
               usernameToLowercase?.startsWith(text.toLowerCase())
            );
         }
      );
      setResults([...searchResults]);
   };

   return (
      <>
         <S.Desktop>
            <MainLayout className="desktop" desktopCard={true}>
               <FormInputs
                  placeholder={"Search for friends"}
                  onKeyUp={(event: { target: HTMLInputElement }) => {
                     searchUser(event.target.value);
                  }}
               />
               <FriendsPageWrapper>
                  {results.map(({ fullName, userImage }, index) => {
                     return (
                        <FriendsModal
                           key={index}
                           fullName={fullName}
                           sentRequest={false}
                           imageUrl={userImage}
                        />
                     );
                  })}
               </FriendsPageWrapper>
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
               <Navbar className="nav" />
            </MainLayout>
         </S.Mobile>
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
      const data: any = [];
      const querySnapshot = await getDocs(collection(firestoreDB, "users"));

      querySnapshot.forEach((doc) => {
         const _data = doc.data();

         const dataObject = {
            ..._data,
            DOB: JSON.stringify(_data?.DOB?.toDate()) || "",
            fullName: _data.firstName + " " + _data.lastName,
            fullNameReverse: _data.lastName + " " + _data.firstName,
         };

         data.push(dataObject);
      });

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
            data,
         },
      };
   } catch (err) {
      console.log("ERR", err);

      return {
         //  redirect: {
         //     destination: "/",
         //  },
         props: {},
      };
   }
}

export default Friends;
