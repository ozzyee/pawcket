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
}: TFriendsModalProps) {
   return (
      <S.FriendsModalDiv className={className}>
         <S.Button>
            {sentRequest ? (
               <PersonRemove id="friend-icon" />
            ) : (
               <PersonAdd id="friend-icon" />
            )}
         </S.Button>
         <S.ImageWrapper>
            <S.Image>
               <Image
                  src={imageUrl ? imageUrl : "/icon-256x256.png"}
                  alt="Picture of the author"
                  width={120}
                  height={120}
               />
            </S.Image>
         </S.ImageWrapper>
         <S.UserNameWrapper>
            <Text className="status-text">Friends Request</Text>
            <Text textType="h3" className="name-text">
               {fullName}
            </Text>
         </S.UserNameWrapper>
      </S.FriendsModalDiv>
   );
}
