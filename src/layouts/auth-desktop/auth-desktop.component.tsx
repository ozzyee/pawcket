/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { TAuthDesktopProps } from "./auth-desktop.definition";
import * as S from "./auth-desktop.style";
import Logo from "../../../public/dummy-logo.svg";
import { Text } from "../../components/text/text.component";
import { TextHolder } from "../../styles/global.style";

export function AuthDesktop({
   className,
   form,
   title,
   subTitle,
   footerText,
   footerTextBold,
}: TAuthDesktopProps) {
   return (
      <S.AuthDesktopDiv className={className}>
         <S.Background>
            <S.LogoAndNameWrapper>
               <Logo id="logo" />
               <Text textType="h1">Pawcket</Text>
            </S.LogoAndNameWrapper>

            <S.FormModal>
               <S.Modal>
                  <S.TextHolder>
                     <Text textType="h2" className="h2-login">
                        {title}
                     </Text>
                  </S.TextHolder>
                  <Text textType="h3" className="h3-login">
                     {subTitle}
                  </Text>
                  <S.FormHolder>{form}</S.FormHolder>

                  <TextHolder className="footer-text">
                     <Text className="plain-text">{footerText}</Text>
                     <Text className="bold landing-text">{footerTextBold}</Text>
                  </TextHolder>
               </S.Modal>
            </S.FormModal>
         </S.Background>
      </S.AuthDesktopDiv>
   );
}
