import React from "react";
import { TCardInfoProps } from "./news-feed-postcard.definition";
import * as S from "./news-feed-postcard.style";
import { Text } from "../text/text.component";
import VetIcon from "./vet-icon.svg";

export function NewsFeedPostCard({
   className,
   vetName,
   vetPhoneNumber,
   vetAddress,
   vetWebsite,
   vetDistance,
}: TCardInfoProps) {
   return (
      <S.Wrapper>
         <S.CardLogoHolder>
            <VetIcon />
         </S.CardLogoHolder>
         <S.CardInfoDiv className={className}>
            <S.CardInfo>
               <Text textType="h3" className="vet-name">
                  {"vetName"}
               </Text>
               <S.TextHolder>
                  <Text className="contact-info bold">Phone:</Text>
                  <Text className="contact-info">{"vetPhoneNumber"}</Text>
               </S.TextHolder>
               <S.TextHolder>
                  <Text className="contact-info bold">Address:</Text>
                  <Text className="contact-info">{"vetAddress"}</Text>
               </S.TextHolder>
               <S.TextHolder>
                  <Text className="contact-info bold">Website:</Text>
                  <Text className="contact-info">{"vetWebsite"}</Text>
               </S.TextHolder>
               <S.TextHolder>
                  <Text className="contact-info bold">Distance:</Text>
                  <Text className="contact-info">{"vetDistance"}</Text>
               </S.TextHolder>
            </S.CardInfo>
         </S.CardInfoDiv>
      </S.Wrapper>
   );
}
