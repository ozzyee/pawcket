import React from "react";
import { TCardInfoProps } from "./news-feed-postcard.definition";
import * as S from "./news-feed-postcard.style";
import { Text } from "../text/text.component";
import VetIcon from "./vet-icon.svg";
import Image from "next/image";
import UserIcon from "./user-icon.svg";
import { InterationRibbon } from "./_partials/interaction-ribbon/interaction-ribbon.component";

export function NewsFeedPostCard({
   className,
   userName,
   postImage,
   postText,
}: TCardInfoProps) {
   return (
      <S.Wrapper>
         <S.CardLogoHolder>
            <UserIcon />
         </S.CardLogoHolder>
         <S.CardInfoDiv className={className}>
            <S.CardInfo>
               {/* <S.UserNameWrapper> */}
               <Text className="usernameText">{userName}</Text>
               {/* </S.UserNameWrapper> */}
               <S.TextHolder className="postText">
                  <Text>{postText}</Text>
               </S.TextHolder>
            </S.CardInfo>
            <InterationRibbon />
         </S.CardInfoDiv>
      </S.Wrapper>
   );
}
