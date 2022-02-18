import React from "react";
import { TTextProps } from "./text.definition";
import * as S from "./text.style";

export function Text({ className, fontType }: TTextProps) {
   // these are all in separate if statements for return early if the if statement is true return the contents in the block

   if (fontType === "h1") {
      return <S.Heading className={className}>Hello</S.Heading>;
   }

   if (fontType === "h2") {
      return <S.SubHeading>Hello</S.SubHeading>;
   }

   if (fontType === "h3") {
      return <S.SmallSubHeading>Hello</S.SmallSubHeading>;
   }

   return <S.Paragraph>Normal</S.Paragraph>;
}
