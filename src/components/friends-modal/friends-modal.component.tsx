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
   userStatus,
   uid,
   currentUserUid,
   type,
   onClickAddFriend,
   onClickRemoveFriend,
   onClickSendFriendRequest,
   onClickUnsendFriendRequest,
}: TFriendsModalProps) {
   const [userStatusMsg, setUserStatusMsg] = useState("");
   const [sentRequest, setSentRequest] = useState(false);
   const [currentUserData, setCurrentUserData] = useState<any>(null);
   const [showAddButton, setShowAddBtn] = useState(false);
   const [friends, setFriends] = useState(false);

   const friendRequestFilter = currentUserData?.friendsRequests?.filter(
      ({ friendID }: { friendID: string }) => friendID === currentUserUid
   );

   const isFriend = currentUserData?.friends?.filter(
      ({ friendID }: { friendID: string }) => friendID === currentUserUid
   );

   // console.log("isFriend =>", isFriend[0].requestAccepted);

   useEffect(() => {
      if (!uid) return;
      //! current users data in real time
      onSnapshot(doc(firestoreDB, "users", uid), (doc) => {
         const data = doc.data();
         const _data = {
            ...data,
            // DOB: "",
         };
         console.log("the data ->", _data);

         setCurrentUserData(_data);
      });
   }, []);

   useEffect(() => {
      if (friendRequestFilter?.length === 1) {
         setUserStatusMsg("request pending");
         setSentRequest(true);
      }

      if (friendRequestFilter?.length < 1) {
         setSentRequest(false);
         setUserStatusMsg("");
      }

      if (uid === currentUserUid) {
         setUserStatusMsg("Your Account");
      }

      if (isFriend?.length >= 1) {
         if (isFriend[0]?.requestAccepted) {
            setUserStatusMsg("Friends");
            setShowAddBtn(false);
            setFriends(true);
         }
      }
   }, [currentUserUid, friendRequestFilter, uid, userStatus, isFriend]);

   useEffect(() => {
      if (uid !== currentUserUid) {
         setShowAddBtn(true);
      }

      if (type === "friend-request") {
         setShowAddBtn(false);
         setUserStatusMsg("Accept Friend");
      }
   }, []);

   return (
      <S.FriendsModalDiv className={className}>
         <S.Button onClick={onClickUnsendFriendRequest} id="remove-friend">
            <PersonRemove className="friend-icon" id="remove-friend" />
         </S.Button>

         <S.Button onClick={onClickSendFriendRequest} id="add-friend">
            <PersonAdd className="friend-icon" id="add-friend" />
         </S.Button>

         <S.AcceptBtn onClick={onClickRemoveFriend} id="reject-friend">
            <PersonXFill className="friend-icon" id="reject-friend" />
         </S.AcceptBtn>

         <S.AcceptBtn onClick={onClickAddFriend} id="accept-friend">
            <PersonCheckFill className="friend-icon" id="accept-friend" />
         </S.AcceptBtn>

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
