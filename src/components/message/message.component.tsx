/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { TMessageProps } from "./message.definition";
import * as S from "./message.style";
import Image from "next/image";

export function Message({ className, sending, message, type }: TMessageProps) {
   if (type === "response") {
      return (
         <>
            <S.ResponseBubble>
               <div className="half light">
                  <div className="typing">
                     <span className="circle scaling"></span>
                     <span className="circle scaling"></span>
                     <span className="circle scaling"></span>
                  </div>
               </div>
            </S.ResponseBubble>
         </>
      );
   }

   console.log();

   const isImg: string[] | undefined = message?.split(
      "https://firebasestorage.googleapis.com"
   );

   // @ts-ignore
   if (isImg?.length > 1) {
      return (
         <>
            {message && (
               <>
                  <S.MessageDiv
                     className={className}
                     float={sending ? "right" : "left"}
                  >
                     <S.MessageWrapper
                        float={sending ? "right" : "left"}
                        color={sending ? "transparent" : "transparent"}
                     >
                        <S.ImageWrapper>
                           <Image
                              src={message}
                              width={120}
                              height={120}
                              objectFit="cover"
                           />
                        </S.ImageWrapper>
                     </S.MessageWrapper>
                  </S.MessageDiv>
               </>
            )}
         </>
      );
   }

   return (
      <S.MessageDiv className={className} float={sending ? "right" : "left"}>
         <S.MessageWrapper
            float={sending ? "right" : "left"}
            color={sending ? "#3984EE" : "#e7eaeb"}
         >
            <S.Message color={sending ? "#e7eaeb" : "black"}>
               {message}
            </S.Message>
         </S.MessageWrapper>
      </S.MessageDiv>
   );
}
//
