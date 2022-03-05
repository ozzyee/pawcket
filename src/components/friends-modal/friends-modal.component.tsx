import React, { useEffect, useState } from "react";
import { TFriendsModalProps } from "./friends-modal.definition";
import * as S from "./friends-modal.style";
import Image from "next/image";
import { PersonRemove } from "@styled-icons/evaicons-solid/PersonRemove";
import { PersonAdd } from "@styled-icons/evaicons-solid/PersonAdd";
import { Text } from "../text/text.component";

export function FriendsModal({
   className,
   fullName,
   imageUrl,
   userStatus,
   onClick,
   uid,
   currentUserUid,
   friendsRequestList,
}: TFriendsModalProps) {
   const [userStatusMsg, setUserStatusMsg] = useState("");
   const [sentRequest, setSentRequest] = useState(false);

   const friendRequestFilter = friendsRequestList?.filter(
      ({ friendID }: { friendID: string }) => friendID === currentUserUid
   );

   useEffect(() => {
      if (friendRequestFilter?.length === 1) {
         setUserStatusMsg("request pending");
         setSentRequest(true);
      }
      if (uid === currentUserUid) {
         setUserStatusMsg("Your Account");
      }
   }, [currentUserUid, friendRequestFilter, uid, userStatus]);

   const onClickHandler = (evt: any) => {
      if (!onClick) return null;
      onClick(evt);

      sentRequest ? setSentRequest(false) : setSentRequest(true);
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
