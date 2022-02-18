import React from "react";
import { TMainLayoutProps } from "./main-layout.definition";
import * as S from "./main-layout.style";
import Image from "next/image";

export function MainLayout({
   className,
   imageSrc,
   topTitle,
   bottomTitle,
   bottomSubTitle,
   children,
}: TMainLayoutProps) {
   return (
      <S.MainLayout className={className}>
         <S.TapNavWrapper></S.TapNavWrapper>
         <S.Top>
            <S.ImageWrapper>
               <Image alt="img" width={100} height={100} src={imageSrc} />
            </S.ImageWrapper>
            <S.TextHolder>{topTitle}</S.TextHolder>
         </S.Top>

         <S.Card>
            <S.TitleWrapper>
               {bottomTitle}
               <br />
               {bottomSubTitle}
            </S.TitleWrapper>
            <S.MainContent>{children}</S.MainContent>
         </S.Card>
      </S.MainLayout>
   );
}
