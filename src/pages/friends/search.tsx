/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import { collection, onSnapshot, query } from "@firebase/firestore";
import type { NextApiRequest } from "next";
import { useEffect, useState } from "react";
import { FormInputs } from "../../components/form-inputs/form-inputs.component";
import { FriendsModal } from "../../components/friends-modal/friends-modal.component";
import { MainLayout, Navbar } from "../../functions/dynamic-imports";
import { AuthService } from "../../lib/auth-service/auth.service";
import { firestoreDB } from "../../lib/firebase/firebase.initialize";
import {
   FriendsPageWrapper,
   FriendsTitleWrapper,
   MobileFriendsWrapper,
} from "../../styles/global.style";
import * as S from "../../styles/vets.style";
import { TUserData } from "../../types/user-data.definition";
import { searchUser } from "../../functions/friends/search-friends";
import { Text } from "../../components/text/text.component";

type TFriendsData = {
   userUID?: string;
};

const Friends = ({ userUID }: TFriendsData) => {
   const [results, setResults] = useState<TUserData[]>([]);
   const [allUsers, setAllUsers] = useState<TUserData[]>([]);
   const [requestNum, setRequestNum] = useState(0);

   //! realtime feed to db
   useEffect(() => {
      if (!userUID) return;
      //! all documents in users in real time
      const q = query(collection(firestoreDB, "users"));
      onSnapshot(q, (querySnapshot) => {
         const users: TUserData[] = [];
         querySnapshot.forEach((doc) => {
            const _data = doc.data();

            if (_data?.friendsRequests) {
               const requests = _data?.friendsRequests;
               setRequestNum(requests?.length - 1);
            }

            const data: any = {
               ..._data,
               fullName: _data.firstName + " " + _data.lastName,
               fullNameReverse: _data.lastName + " " + _data.firstName,
            };
            users.push(data);
         });
         setAllUsers(users);
      });
   }, []);

   return (
      <>
         <S.Desktop>
            <MainLayout className="desktop" desktopCard={true}>
               <FormInputs
                  placeholder={"Search for friends"}
                  onKeyUp={(event: { target: HTMLInputElement }) => {
                     setResults(searchUser(event.target.value, allUsers));
                  }}
               />
               <FriendsPageWrapper>
                  {results.map(
                     (
                        { fullName, userImage, userID, friendsRequests },
                        index
                     ) => {
                        return (
                           <FriendsModal
                              key={index}
                              uid={userID}
                              currentUserUid={userUID}
                              fullName={fullName}
                              sentRequest={false}
                              imageUrl={userImage}
                              friendsRequestList={friendsRequests}
                           />
                        );
                     }
                  )}
               </FriendsPageWrapper>
            </MainLayout>
         </S.Desktop>

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
                  <FormInputs
                     placeholder={"Search for friends"}
                     onKeyUp={(event: { target: HTMLInputElement }) => {
                        setResults(searchUser(event.target.value, allUsers));
                     }}
                  />
                  <div id="friends">
                     {results.map(
                        ({ firstName, lastName, userID, userImage }) => {
                           return (
                              <FriendsModal
                                 key={userID}
                                 type="mobile"
                                 fullName={`${firstName} ${lastName}`}
                                 uid={userID}
                                 currentUserUid={userUID}
                                 friendsRequestList={undefined}
                                 imageUrl={userImage}
                              />
                           );
                        }
                     )}
                  </div>
               </MobileFriendsWrapper>
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

export default Friends;
