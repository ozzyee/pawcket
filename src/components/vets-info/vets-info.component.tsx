import React from "react";
import { TVetsInfoProps } from "./vets-info.definition";
import * as S from "./vets-info.style";
import { Text } from "../text/text.component";
import VetIcon from "./vet-icon.svg";

export function VetsInfo({
   className,
   vetName,
   vetPhoneNumber,
   vetAddress,
   vetWebsite,
   vetDistance,
}: TVetsInfoProps) {
   return (
      <S.Wrapper>
         <S.VetsLogoHolder>
            <VetIcon />
         </S.VetsLogoHolder>
         <S.VetsInfoDiv className={className}>
            <S.VetsInfo>
               <Text textType="h3" className="vet-name">
                  {vetName}
               </Text>
               <S.TextHolder>
                  <Text className="contact-info bold">Phone:</Text>
                  <Text className="contact-info">{vetPhoneNumber}</Text>
               </S.TextHolder>
               <S.TextHolder>
                  <Text className="contact-info bold">Address:</Text>
                  <Text className="contact-info">{vetAddress}</Text>
               </S.TextHolder>
               <S.TextHolder>
                  <Text className="contact-info bold">Website:</Text>
                  <Text className="contact-info">{vetWebsite}</Text>
               </S.TextHolder>
               <S.TextHolder>
                  <Text className="contact-info bold">Distance:</Text>
                  <Text className="contact-info">{vetDistance}</Text>
               </S.TextHolder>
            </S.VetsInfo>
         </S.VetsInfoDiv>
      </S.Wrapper>
   );
}
