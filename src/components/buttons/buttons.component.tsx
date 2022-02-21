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
}: TButtonsProps) {
   const theme = {
      backgroundColor: dark ? styles.colors.orange : styles.colors.primary,
      width: vetsNavBtn ? 100 : 250,
      fontSize: vetsNavBtn ? 0.8 : 0.9,
      height: vetsNavBtn ? 25 : 40,
      borderRadius: vetsNavBtn ? 30 : 11,
   };

   return (
      <ThemeProvider theme={theme}>
         <S.ButtonsDiv className={className} onClick={onClick}>
            {children}
         </S.ButtonsDiv>
      </ThemeProvider>
   );
}
