import React from "react";
import { TTextProps } from "./text.definition";
import * as S from "./text.style";

export function Text({ className, textType, children, onClick }: TTextProps) {
   // these are all in separate if statements for return early if the if statement is true return the contents in the block

   if (textType === "h1") {
      return (
         <S.Heading className={className} onClick={onClick}>
            {children}
         </S.Heading>
      );
   }

   if (textType === "h2") {
      return (
         <S.SubHeading className={className} onClick={onClick}>
            {children}
         </S.SubHeading>
      );
   }

   if (textType === "h3") {
      return (
         <S.SmallSubHeading className={className} onClick={onClick}>
            {children}
         </S.SmallSubHeading>
      );
   }

   return (
      <S.Paragraph className={className} onClick={onClick}>
         {children}
      </S.Paragraph>
   );
}
