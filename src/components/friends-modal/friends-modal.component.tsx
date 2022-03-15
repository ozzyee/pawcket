/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { TFriendsModalProps } from "./friends-modal.definition";
import * as S from "./friends-modal.style";
import Image from "next/image";
import { PersonRemove } from "@styled-icons/evaicons-solid/PersonRemove";
import { PersonAdd } from "@styled-icons/evaicons-solid/PersonAdd";
import { Text } from "../text/text.component";
import { onSnapshot, doc } from "@firebase/firestore";
import { firestoreDB } from "../../lib/firebase/firebase.initialize";
import { PersonCheckFill } from "@styled-icons/bootstrap/PersonCheckFill";
import { PersonXFill } from "@styled-icons/bootstrap/PersonXFill";
import { sendFriendRequest } from "../../functions/friends/send-friend-request";
import { unsendFriendRequest } from "../../functions/friends/unsend-friend-request";
import { removeFriend } from "../../functions/friends/remove-friend";
import { addFriend } from "../../functions/friends/add-friend";
import { Buttons } from "../buttons/buttons.component";

export function FriendsModal({
   className,
   fullName,
   imageUrl,
   uid,
   currentUserUid,
   type,
   onClick,
   chatID,
   message,
}: TFriendsModalProps) {
   const [userStatusMsg, setUserStatusMsg] = useState("");
   const [currentFriendsData, setCurrentFriendsData] = useState<any>(null);
   const [currentUsersData, setCurrentUsersData] = useState<any>(null);
   const [msg, setMsg] = useState("");

   useEffect(() => {
      const setUser = () => {
         if (!currentUsersData) return null;
         //! friend request
         currentUsersData?.friendsRequests?.map((item: any) => {
            if (item.friendID === uid && currentUserUid !== uid) {
               setUserStatusMsg("Friend Request");
               return;
            }
         });

         currentUsersData?.friends?.map((item: any) => {
            //! is friends
            if (item.friendID === uid && item.requestAccepted) {
               setUserStatusMsg("Friends");
               return;
            } else if (item.friendID === uid && !item.requestAccepted) {
               //! pending
               setUserStatusMsg("Friend pending");
               return;
            }
         });

         const friendsDataFilter = currentUsersData?.friends?.filter(
            ({ friendID }: { friendID: string }) => friendID === uid
         );
         const friendsRequestFilter = currentUsersData?.friendsRequests?.filter(
            ({ friendID }: { friendID: string }) => friendID === uid
         );

         if (
            userStatusMsg === "Friend pending" &&
            friendsDataFilter.length < 1 &&
            friendsRequestFilter?.length < 1 &&
            currentUserUid !== uid
         ) {
            console.log("currentUsersData -> ");
            setUserStatusMsg("");
         }

         if (
            friendsDataFilter?.length < 1 &&
            friendsRequestFilter?.length < 1 &&
            userStatusMsg !== "Friend pending" &&
            currentUserUid !== uid
         ) {
            setUserStatusMsg("");
         }
      };
      setUser();
   }, [currentUsersData, uid]);

   useEffect(() => {
      //* is current user
      if (currentUserUid === uid) {
         setUserStatusMsg("You");
         return;
      } else if (userStatusMsg === "Friend pending") {
         setUserStatusMsg("Friend pending");
         return;
      } else if (userStatusMsg === "Friend Request") {
         setUserStatusMsg("Friend Request");
         return;
      } else if (userStatusMsg === "Friends") {
         setUserStatusMsg("Friends");
         return;
      } else {
         setUserStatusMsg("");
         return;
      }
   }, [currentFriendsData, uid, currentUserUid]);

   //! realtime data
   useEffect(() => {
      if (!uid || !currentUserUid) return;
      //! current users data in real time
      onSnapshot(doc(firestoreDB, "users", uid), (doc) => {
         const data = doc.data();
         const _data = {
            ...data,
         };
         setCurrentFriendsData(_data);
      });

      onSnapshot(doc(firestoreDB, "users", currentUserUid), (doc) => {
         const data = doc.data();
         const _data = {
            ...data,
         };
         setCurrentUsersData(_data);
      });
   }, []);
   const isImg: string[] | undefined = message?.split(
      "https://firebasestorage.googleapis.com"
   );

   useEffect(() => {
      // @ts-ignore
      if (isImg?.length > 1) {
         setMsg("Image Sent");
         return;
      }
      // @ts-ignore
      setMsg(message);
   }, [message]);

   const paramsObject = {
      id: uid,
      userUID: currentUserUid,
      currentUserData: currentUsersData,
   };

   if (type === "mobile messaging") {
      return (
         <S.MobileFriendWrapper
            onClick={() => {
               onClick(`${chatID}/${uid}`);
            }}
         >
            <S.MobileSmallWrapper>
               <S.MobileImg>
                  <Image
                     src={!imageUrl ? "/icon-256x256.png" : imageUrl}
                     alt="Picture of the author"
                     width={60}
                     height={60}
                  />
               </S.MobileImg>
            </S.MobileSmallWrapper>

            <S.MobileNameAndBtnWrapper>
               <S.TextWrapper>
                  <Text textType="h3" className="name-text-mobile">
                     {fullName}
                  </Text>
                  {!message && (
                     <Text className="status-text">{userStatusMsg}</Text>
                  )}
                  {message && <Text className="status-text">{msg}</Text>}
               </S.TextWrapper>
            </S.MobileNameAndBtnWrapper>
         </S.MobileFriendWrapper>
      );
   }

   if (type === "mobile") {
      return (
         <S.MobileFriendWrapper>
            <S.MobileSmallWrapper>
               <S.MobileImg>
                  <Image
                     src={!imageUrl ? "/icon-256x256.png" : imageUrl}
                     alt="Picture of the author"
                     width={80}
                     height={80}
                  />
               </S.MobileImg>
            </S.MobileSmallWrapper>

            <S.MobileNameAndBtnWrapper>
               <S.TextWrapper>
                  <Text textType="h3" className="name-text-mobile">
                     {fullName}
                  </Text>
                  <Text className="status-text">{userStatusMsg}</Text>
               </S.TextWrapper>

               <S.ButtonWrapper>
                  {userStatusMsg === "Friends" && (
                     <Buttons
                        className="btn"
                        onClick={() => {
                           removeFriend({
                              ...paramsObject,
                           });
                        }}
                     >
                        unfriend
                     </Buttons>
                  )}

                  {userStatusMsg === "Friend Request" && (
                     <>
                        <Buttons
                           className="btn"
                           onClick={() => {
                              addFriend({
                                 ...paramsObject,
                              });
                           }}
                        >
                           Confirm
                        </Buttons>
                        <Buttons
                           className="btn delete"
                           onClick={() => {
                              removeFriend({
                                 ...paramsObject,
                              });
                           }}
                        >
                           Delete
                        </Buttons>
                     </>
                  )}

                  {!userStatusMsg && (
                     <>
                        <Buttons
                           className="btn"
                           onClick={() => {
                              sendFriendRequest({
                                 ...paramsObject,
                              });
                           }}
                        >
                           Add Friend
                        </Buttons>
                     </>
                  )}

                  {userStatusMsg === "Friend pending" && (
                     <>
                        <Buttons
                           className="btn"
                           onClick={() => {
                              unsendFriendRequest({
                                 ...paramsObject,
                              });
                           }}
                        >
                           Remove
                        </Buttons>
                     </>
                  )}
               </S.ButtonWrapper>
            </S.MobileNameAndBtnWrapper>
         </S.MobileFriendWrapper>
      );
   }

   return (
      <S.FriendsModalDiv className={className}>
         {!userStatusMsg && (
            <>
               <S.RightBtn
                  onClick={() => {
                     sendFriendRequest({
                        ...paramsObject,
                     });

                     setUserStatusMsg("Friend pending");
                  }}
                  id="add-friend"
               >
                  <PersonAdd className="friend-icon" id="add-friend" />
               </S.RightBtn>
            </>
         )}

         {userStatusMsg === "Friend pending" && (
            <>
               <S.RightBtn
                  onClick={() => {
                     unsendFriendRequest({
                        ...paramsObject,
                     });
                     setUserStatusMsg("");
                  }}
                  id="remove-friend"
               >
                  <PersonRemove className="friend-icon" id="remove-friend" />
               </S.RightBtn>
            </>
         )}

         {userStatusMsg === "Friend Request" && (
            <>
               <S.LeftButton
                  onClick={() => {
                     removeFriend({
                        ...paramsObject,
                     });
                     setUserStatusMsg("");
                  }}
               >
                  <PersonXFill className="friend-icon" id="reject-friend" />
               </S.LeftButton>
               <S.RightBtn
                  onClick={() => {
                     addFriend({
                        ...paramsObject,
                     });
                     setUserStatusMsg("Friends");
                  }}
                  id="remove-friend"
               >
                  <PersonCheckFill className="friend-icon" id="accept-friend" />
               </S.RightBtn>
            </>
         )}

         {userStatusMsg === "Friends" && (
            <>
               <S.RightBtn
                  onClick={() => {
                     removeFriend({
                        ...paramsObject,
                     });
                     setUserStatusMsg("");
                  }}
               >
                  <PersonXFill className="friend-icon" id="reject-friend" />
               </S.RightBtn>
            </>
         )}

         <S.ImageWrapper>
            <S.Image>
               <Image
                  src={!imageUrl ? "/icon-256x256.png" : imageUrl}
                  alt="Picture of the author"
                  width={120}
                  height={120}
               />
            </S.Image>
         </S.ImageWrapper>
         <S.UserNameWrapper>
            <Text className="status-text">{userStatusMsg}</Text>
            <Text textType="h3" className="name-text">
               {fullName}
            </Text>
         </S.UserNameWrapper>
      </S.FriendsModalDiv>
   );
}
