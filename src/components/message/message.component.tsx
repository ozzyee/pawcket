import React from "react";
import { TMessageProps } from "./message.definition";
import * as S from "./message.style";

export function Message({ className, sending, message, type }: TMessageProps) {
   if (type == "response") {
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
