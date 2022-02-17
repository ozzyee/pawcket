import React from "react";
import { TButtonsProps } from "./buttons.definition";
import * as S from "./buttons.style";
import styles from "../../styles/style.config.json";

export function Buttons({ className, dark, children }: TButtonsProps) {
   return (
      <S.ButtonsDiv
         className={className}
         backgroundColor={dark ? styles.colors.orange : styles.colors.primary}
      >
         {children}
      </S.ButtonsDiv>
   );
}
