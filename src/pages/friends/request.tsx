/* eslint-disable react-hooks/exhaustive-deps */
import { NextApiRequest } from "next";
import { MainLayout, Frame, Navbar } from "../../functions/dynamic-imports";
import { AuthService } from "../../lib/auth-service/auth.service";
import { FriendsPageWrapper } from "../../styles/global.style";
import * as S from "../../styles/vets.style";
import {
   collection,
   doc,
   getDoc,
   onSnapshot,
   query,
   setDoc,
} from "@firebase/firestore";
import { firestoreDB } from "../../lib/firebase/firebase.initialize";
import { useEffect, useState } from "react";
import { FriendsModal } from "../../components/friends-modal/friends-modal.component";

type TFriendsData = {
   userUID?: string;
};

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
   friendsRequests: any;
};

const Friends = ({ userUID }: TFriendsData) => {
   const [currentUserData, setCurrentUserData] = useState<any>(null);
   const [allUsers, setAllUsers] = useState<TUserData[]>([]);
   const [_data, setData] = useState<TUserData[]>([]);

   useEffect(() => {
      if (!userUID) return;
      //! current users data in real time
      onSnapshot(doc(firestoreDB, "users", userUID), (doc) => {
         const data = doc.data();
         const _data = {
            ...data,
            DOB: "",
         };
         setCurrentUserData(_data);
      });

      //! all documents in users in real time
      const q = query(collection(firestoreDB, "users"));
      onSnapshot(q, (querySnapshot) => {
         const users: TUserData[] = [];
         querySnapshot.forEach((doc) => {
            const _data = doc.data();
            const data: any = {
               ..._data,
               DOB: "",
               fullName: _data.firstName + " " + _data.lastName,
               fullNameReverse: _data.lastName + " " + _data.firstName,
            };
            users.push(data);
         });
         setAllUsers(users);
      });
   }, []);

   useEffect(() => {
      const data: TUserData[] = [];
      allUsers.map((item) => {
         currentUserData?.friendsRequests?.map(
            ({ friendID }: { friendID: string }) => {
               if (item.userID === friendID) {
                  // console.log("friends data =>", item);
                  data.push(item);
               }
            }
         );
      });
      setData(data);
   }, [allUsers]);

   const confirmRequest = async ({ id }: { id: string }) => {
      if (!userUID) return;
      const friends = currentUserData.friends;
      const removeItem = currentUserData.friendsRequests;

      const index = removeItem?.findIndex(
         ({ friendID }: { friendID: string }) => {
            return friendID === id;
         }
      );

      if (index !== -1) removeItem?.splice(index, 1);

      if (!friends) {
         const newData = {
            ...currentUserData,
            friends: ["", { friendID: id, requestAccepted: true }],
         };

         await setDoc(doc(firestoreDB, "users", userUID), newData);
         return;
      }
      const newData = {
         ...currentUserData,
         friends: [...friends, { friendID: id, requestAccepted: true }],
      };

      await setDoc(doc(firestoreDB, "users", userUID), newData);
      setFriend({ id });
   };

   const setFriend = async ({ id }: { id: string }) => {
      const docRef = doc(firestoreDB, "users", id);
      const docSnap = await getDoc(docRef);
      const _data = docSnap.data();
      const friendArr = _data?.friends;

      const objIndex = friendArr?.findIndex(
         ({ friendID }: { friendID: string }) => friendID === userUID
      );

      friendArr[objIndex].requestAccepted = true;
      await setDoc(doc(firestoreDB, "users", id), _data);
   };

   return (
      <>
         <S.Desktop>
            <MainLayout className="desktop" desktopCard={true}>
               <FriendsPageWrapper>
                  {_data.map(
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
                              onClick={(evt) => {
                                 const functionId =
                                    (evt.target as Element).id ||
                                    // @ts-ignore
                                    (evt.target as Element).ownerSVGElement?.id;

                                 if (functionId === "accept-friend") {
                                    confirmRequest({ id: userID });
                                 } else {
                                    // removeFriend({ id: userID });
                                 }
                              }}
                              type="friend-request"
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
         //  redirect: {
         //     destination: "/",
         //  },
         props: {},
      };
   }
}

export default Friends;
