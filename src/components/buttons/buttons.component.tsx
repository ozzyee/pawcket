import React from "react";
import { TButtonsProps } from "./buttons.definition";
import * as S from "./buttons.style";

export function Buttons({ className }: TButtonsProps) {
   return (
      <S.ButtonsDiv className={className}>hello button component</S.ButtonsDiv>
   );
}
