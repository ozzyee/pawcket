import React from "react";
import { TMainLayoutProps } from "./main-layout.definition";
import * as S from "./main-layout.style";
import Image from "next/image";
import { Text } from "../../components/text/text.component";

export function MainLayout({
   className,
   imageSrc,
   topTitle,
   bottomTitle,
   bottomSubTitle,
   children,
   topChildren,
   desktopCard,
   cardClassName
}: TMainLayoutProps) {
   return (
      <>
         <S.Wrapper className={className}>
            <S.Background />

            {desktopCard && (
               <>
                  <S.BackgroundImage />
                  <S.CardDesktop>{children}</S.CardDesktop>
               </>
            )}

            {!desktopCard && (
               <S.MainLayout className={className}>
                  {/* <S.TapNavWrapper></S.TapNavWrapper> */}
                  <S.Top>
                     <S.ImageWrapper>
                        {imageSrc ? (
                           <S.ImageHolder>
                              <Image
                                 alt="img"
                                 width={100}
                                 height={100}
                                 src="frame.svg"
                                 id="frame"
                              />
                              <Image
                                 alt="img"
                                 width={100}
                                 height={100}
                                 src={imageSrc}
                                 id="img"
                              />
                           </S.ImageHolder>
                        ) : (
                           <> {topChildren}</>
                        )}
                     </S.ImageWrapper>
                     <S.TextHolder>
                        {topTitle && (
                           <Text textType="h1" className="heading-h1">
                              {topTitle}
                           </Text>
                        )}
                     </S.TextHolder>
                  </S.Top>
               </S.MainLayout>
            )}

            {!desktopCard && (
               <>
                  <S.Filter />
                  <S.Card className={cardClassName}>
                     <S.InnerCard>
                        <S.TitleWrapper>
                           {bottomTitle && (
                              <Text textType="h2" className="sub-heading-h2">
                                 {bottomTitle}
                              </Text>
                           )}
                           {bottomSubTitle && (
                              <Text textType="h3" className="sub-heading-h3">
                                 {bottomSubTitle}
                              </Text>
                           )}
                        </S.TitleWrapper>
                        <S.MainContent>{children}</S.MainContent>
                     </S.InnerCard>
                  </S.Card>
               </>
            )}
         </S.Wrapper>
      </>
   );
}
