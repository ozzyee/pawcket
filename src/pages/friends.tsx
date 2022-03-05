/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import {
   collection,
   doc,
   getDoc,
   getDocs,
   onSnapshot,
} from "@firebase/firestore";
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
   friends: TCurrentUsersFriends[];
};

type TFriendsData = {
   data: TUserData[];
   userUID?: string;
   currentUserData: TUserData;
};

type TCurrentUsersFriends = {
   friendID: string;
   requestAccepted: boolean;
};

const Friends = ({ data, userUID, currentUserData }: TFriendsData) => {
   const [results, setResults] = useState<TUserData[]>([]);
   const [friends, setFriends] = useState<TCurrentUsersFriends[]>([
      ...currentUserData.friends,
   ]);

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

   const addUser = (friendID: string) => {
      setFriends([...friends, { friendID, requestAccepted: false }]);
   };

   console.log("friends => ->", friends);

   // const removeUser = () => {};

   useEffect(() => {
      // @ts-ignore
      onSnapshot(doc(firestoreDB, "users", userUID), (doc) => {
         // console.log("Current data: ", doc.data());
      });
   }, []);

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
                  {results.map(({ fullName, userImage, userID }, index) => {
                     return (
                        <FriendsModal
                           key={index}
                           fullName={fullName}
                           sentRequest={false}
                           imageUrl={userImage}
                           onClick={(evt) => {
                              const functionId =
                                 (evt.target as Element).id ||
                                 // @ts-ignore
                                 (evt.target as Element).ownerSVGElement?.id;

                              if (functionId === "add-friend") {
                                 addUser(userID);
                              } else {
                                 console.log("remove");
                              }
                           }}
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

      const docRef = doc(firestoreDB, "users", userUID);
      const docSnap = await getDoc(docRef);
      const _currentUserData = docSnap.data();

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

      const currentUserData = {
         ..._currentUserData,
         DOB: JSON.stringify(_currentUserData?.DOB?.toDate()) || "",
      };

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
            currentUserData,
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
