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

export function FriendsModal({
   className,
   fullName,
   imageUrl,
   userStatus,
   onClick,
   uid,
   currentUserUid,
}: TFriendsModalProps) {
   const [userStatusMsg, setUserStatusMsg] = useState("");
   const [sentRequest, setSentRequest] = useState(false);
   const [currentUserData, setCurrentUserData] = useState<any>(null);

   const friendRequestFilter = currentUserData?.friendsRequests?.filter(
      ({ friendID }: { friendID: string }) => friendID === currentUserUid
   );

   useEffect(() => {
      if (!uid) return;
      //! current users data in real time
      onSnapshot(doc(firestoreDB, "users", uid), (doc) => {
         const data = doc.data();
         const _data = {
            ...data,
            DOB: "",
         };
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
   }, [currentUserUid, friendRequestFilter, uid, userStatus]);

   const onClickHandler = (evt: any) => {
      if (!onClick) return null;
      onClick(evt);
   };

   return (
      <S.FriendsModalDiv className={className}>
         {uid !== currentUserUid && (
            <>
               {sentRequest ? (
                  <S.Button onClick={onClickHandler} id="remove-friend">
                     <PersonRemove className="friend-icon" id="remove-friend" />
                  </S.Button>
               ) : (
                  <S.Button onClick={onClickHandler} id="add-friend">
                     <PersonAdd className="friend-icon" id="add-friend" />
                  </S.Button>
               )}
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
