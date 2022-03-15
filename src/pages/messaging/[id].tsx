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
import { useRouter } from "next/router";
import Image from "next/image";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";

type TFriendsData = {
   userUID?: string;
};

const Message = ({ userUID }: TFriendsData) => {
   const router = useRouter();
   const msgID = router.asPath.split("/")[2];
   const [selectedFriend, setSelectedFriend] = useState<TUserData>();
   const [userID, setUserId] = useState("");

   useEffect(() => {
      if (!userUID) return;
      onSnapshot(doc(firestoreDB, "massages", msgID), (doc) => {
         const data = doc.data();
         const users = data?.users;

         users?.map(({ userId }: { userId: string }) => {
            if (userUID !== userId) {
               setUserId(userId);
            }
         });
      });
   }, []);

   useEffect(() => {
      if (!userID) return;
      onSnapshot(doc(firestoreDB, "users", userID), (doc) => {
         const data = doc.data();
         // @ts-ignore
         setSelectedFriend(data);
      });
   }, [userID]);

   if (!selectedFriend) return null;

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
                     {selectedFriend.userImage && (
                        <div className="img-holder">
                           <Image
                              width={60}
                              height={60}
                              alt="user img"
                              src={selectedFriend.userImage}
                           />
                        </div>
                     )}
                     <Text textType="h1" className="msg-name">
                        {selectedFriend.firstName}
                     </Text>
                  </FriendsTitleWrapper>
               }
            >
               {/* <MobileFriendsWrapper> */}
               <MessagingScreen
                  type="messaging"
                  userUID={userUID}
                  selectedFriend={userID}
                  messageID={msgID}
               />
               {/* </MobileFriendsWrapper> */}
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
