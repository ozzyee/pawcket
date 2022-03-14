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
import { MainLayout, Navbar } from "../functions/dynamic-imports";
import { AuthService } from "../lib/auth-service/auth.service";
import { firestoreDB } from "../lib/firebase/firebase.initialize";
import { TUserData } from "../types/user-data.definition";
import { Text } from "../components/text/text.component";
import * as S from "../styles/vets.style";
import { FriendsTitleWrapper, MobileFriendsWrapper } from "../styles/global.style";

type TFriendsData = {
   userUID?: string;
};

const Message = ({ userUID }: TFriendsData) => {
   const [allFriends, setAllFriends] = useState([]);
   const [friendsList, setFriendsList] = useState<TUserData[]>([]);
   const [requestNum, setRequestNum] = useState(0);

   useEffect(() => {
      if (!userUID) return;
      onSnapshot(doc(firestoreDB, "users", userUID), (doc) => {
         const data = doc.data();
         const requests = data?.friendsRequests;
         const friends = data?.friends;
         setAllFriends(friends);
         setRequestNum(requests?.length - 1);
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

   console.log("friendsList => ", friendsList);

   return (
      <>
         <S.Mobile>
            <MainLayout
               className="mobile"
               cardClassName="friends-section"
               topChildren={
                  <FriendsTitleWrapper>
                     <Text textType="h1">Friends</Text>
                  </FriendsTitleWrapper>
               }
            >
               <MobileFriendsWrapper>
                  <Navbar type="mobile-friends" requests={requestNum} />
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
