/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import {
   collection,
   doc,
   DocumentData,
   onSnapshot,
   query,
} from "@firebase/firestore";
import type { NextApiRequest } from "next";
import { useEffect, useState } from "react";
import { MainLayout } from "../../functions/dynamic-imports";
import { MessagingScreen } from "../../layouts/messaging-screen/messaging-screen.component";
import { AuthService } from "../../lib/auth-service/auth.service";
import { firestoreDB } from "../../lib/firebase/firebase.initialize";
import {
   BackButton,
   FriendsTitleWrapper,
   MobileFriendsWrapper,
} from "../../styles/global.style";
import { TUserData } from "../../types/user-data.definition";
import { Text } from "../../components/text/text.component";
import * as S from "../../styles/vets.style";
import Image from "next/image";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";
import router from "next/router";

type TFriendsData = {
   userUID?: string;
};

const Message = ({ userUID }: TFriendsData) => {
   const [allFriends, setAllFriends] = useState([]);
   const [friendsList, setFriendsList] = useState<TUserData[]>([]);

   useEffect(() => {
      if (!userUID) return;
      onSnapshot(doc(firestoreDB, "users", userUID), (doc) => {
         const data = doc.data();
         const requests = data?.friendsRequests;
         const friends = data?.friends;
         setAllFriends(friends);
      });
   }, []);

   useEffect(() => {
      const myFriends = allFriends?.filter(
         ({ requestAccepted }) => requestAccepted === true
      );

      const q = query(collection(firestoreDB, "users"));
      onSnapshot(q, (querySnapshot) => {
         const users: DocumentData = [];
         querySnapshot.forEach((doc) => {
            users.push(doc.data());
         });

         const _friendsList: TUserData[] = [];
         users.map((user: TUserData) => {
            myFriends?.map(({ friendID }) => {
               if (user?.userID === friendID) {
                  _friendsList.push(user);
               }
            });
         });
         setFriendsList(_friendsList);
      });
   }, [allFriends]);

   return (
      <>
         <S.Mobile>
            <MainLayout
               className="mobile"
               cardClassName="messaging"
               topChildren={
                  <FriendsTitleWrapper>
                     <BackButton onClick={() => router.back()}>
                        <ArrowBack id="back-btn" />
                     </BackButton>
                     <Text textType="h1">Select Contact</Text>
                  </FriendsTitleWrapper>
               }
            >
               <MobileFriendsWrapper>
                  <MessagingScreen type="select-contact" userUID={userUID} />
               </MobileFriendsWrapper>
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
         props: {},
      };
   }
}

export default Message;
