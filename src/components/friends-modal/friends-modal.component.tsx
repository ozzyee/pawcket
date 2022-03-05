import React from "react";
import { TFriendsModalProps } from "./friends-modal.definition";
import * as S from "./friends-modal.style";
import Image from "next/image";
import { PersonRemove } from "@styled-icons/evaicons-solid/PersonRemove";
import { PersonAdd } from "@styled-icons/evaicons-solid/PersonAdd";
import { Text } from "../text/text.component";

export function FriendsModal({
   className,
   fullName,
   sentRequest,
   imageUrl,
   userStatus,
   onClick,
   uid,
   currentUserUid,
}: TFriendsModalProps) {
   return (
      <S.FriendsModalDiv className={className}>
         {uid !== currentUserUid&& (
            <>
               {sentRequest ? (
                  <S.Button onClick={onClick} id="remove-friend">
                     <PersonRemove className="friend-icon" id="remove-friend" />
                  </S.Button>
               ) : (
                  <S.Button onClick={onClick} id="add-friend">
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
           {uid !== currentUserUid && <Text className="status-text">{userStatus ? userStatus : ""}</Text>}
           {uid === currentUserUid && <Text className="status-text">Your account</Text>}
            <Text textType="h3" className="name-text">
               {fullName}
            </Text>
         </S.UserNameWrapper>
      </S.FriendsModalDiv>
   );
}
