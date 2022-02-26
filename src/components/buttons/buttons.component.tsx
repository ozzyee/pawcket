import React from "react";
import { TButtonsProps } from "./buttons.definition";
import * as S from "./buttons.style";
import styles from "../../styles/style.config.json";
import { ThemeProvider } from "styled-components";

export function Buttons({
   className,
   dark,
   children,
   onClick,
   vetsNavBtn,
   id
}: TButtonsProps) {
   const theme = {
      backgroundColor: dark ? styles.colors.orange : styles.colors.primary,
      width: vetsNavBtn ? 100 : 250,
      fontSize: vetsNavBtn ? 0.8 : 1.5,
      height: vetsNavBtn ? 25 : 60,
      borderRadius: vetsNavBtn ? 30 : 11,
      fontColor: dark ? "white" : "#CF5C36",
   };

   return (
      <ThemeProvider theme={theme}>
         <S.ButtonsDiv className={className} id={id} onClick={onClick}>
            {children}
         </S.ButtonsDiv>
      </ThemeProvider>
   );
}
