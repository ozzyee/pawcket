import React from "react";
import { TCardInfoProps } from "./news-feed-postcard.definition";
import * as S from "./news-feed-postcard.style";
import { Text } from "../text/text.component";
import VetIcon from "./vet-icon.svg";
import Image from "next/image";

export function NewsFeedPostCard({
   className,
   userName,
   postImage,
   postText,
}: TCardInfoProps) {
   return (
      <S.Wrapper>
         <S.CardLogoHolder>
            <VetIcon />
         </S.CardLogoHolder>
         <S.CardInfoDiv className={className}>
            <S.CardInfo>
               <Text textType="h3">{userName}</Text>
               <S.TextHolder>
                  <Text>{postText}</Text>
               </S.TextHolder>
            </S.CardInfo>
         </S.CardInfoDiv>
      </S.Wrapper>
   );
}
