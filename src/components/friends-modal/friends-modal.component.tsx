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

export function FriendsModal({
   className,
   fullName,
   imageUrl,
   uid,
   currentUserUid,
   onClickAddFriend,
   onClickRemoveFriend,
   onClickSendFriendRequest,
   onClickUnsendFriendRequest,
}: TFriendsModalProps) {
   const [userStatusMsg, setUserStatusMsg] = useState("");
   const [currentFriendsData, setCurrentFriendsData] = useState<any>(null);
   const [currentUsersData, setCurrentUsersData] = useState<any>(null);

   useEffect(() => {
      currentUsersData?.friendsRequests?.map(
         ({ friendID }: { friendID: string }) => {
            if (friendID === uid) {
               setUserStatusMsg("Friend Request");
               return;
            }
         }
      );
   }, [currentUsersData]);

   useEffect(() => {
      //* request pending
      const friendPending = currentFriendsData?.friendsRequests?.filter(
         ({ friendID }: { friendID: string }) => {
            return friendID === currentUserUid;
         }
      );

      if (friendPending?.length > 0) {
         setUserStatusMsg("Friend pending");
         return;
      }

      //* is friends
      const friend = currentFriendsData?.friends?.filter(
         ({ friendID }: { friendID: string }) => {
            return friendID === currentUserUid;
         }
      );

      if (friend?.length > 0) {
         setUserStatusMsg("Friends");
         return;
      }

      //* is current user
      if (currentUserUid === uid) {
         setUserStatusMsg("You");
      } else {
         setUserStatusMsg("");
      }
   }, [currentFriendsData, uid]);

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

   return (
      <S.FriendsModalDiv className={className}>
         {!userStatusMsg && (
            <>
               <S.RightBtn onClick={onClickSendFriendRequest} id="add-friend">
                  <PersonAdd className="friend-icon" id="add-friend" />
               </S.RightBtn>
            </>
         )}

         {userStatusMsg === "Friend pending" && (
            <>
               <S.RightBtn
                  onClick={onClickUnsendFriendRequest}
                  id="remove-friend"
               >
                  <PersonRemove className="friend-icon" id="remove-friend" />
               </S.RightBtn>
            </>
         )}

         {userStatusMsg === "Friend Request" && (
            <>
               <S.LeftButton onClick={onClickRemoveFriend}>
                  <PersonXFill className="friend-icon" id="reject-friend" />
               </S.LeftButton>
               <S.RightBtn onClick={onClickAddFriend} id="remove-friend">
                  <PersonCheckFill className="friend-icon" id="accept-friend" />
               </S.RightBtn>
            </>
         )}

         {userStatusMsg === "Friends" && (
            <>
               <S.RightBtn onClick={onClickRemoveFriend}>
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
