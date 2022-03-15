import React from "react";
import { Buttons } from "../../../../functions/dynamic-imports";
import * as S from "./interaction-ribbon.style";
import { TInteractionRibbonProps } from "./interaction-ribbon.definition";
import { useState, useEffect } from "react";

export function InterationRibbon({
   likeCount,
   handleLikeClick,
   isLiked,
   handleCommentClick,
}: TInteractionRibbonProps) {
   const interaction = [
      {
         buttonName: "Like",
         buttonNameAlt: "Unlike",
      },
      {
         buttonName: "Comment",
         buttonNameAlt: "Comment",
      },
      {
         buttonName: "Share",
         buttonNameAlt: "Share",
      },
   ];

   return (
      <>
         <S.InteractionList>
            {interaction.map((item, index) => {
               return (
                  <>
                     <Buttons
                        vetsNavBtn={true}
                        onClick={
                           index === 0
                              ? handleLikeClick
                              : index === 1
                              ? handleCommentClick
                              : null
                        }
                     >
                        {!isLiked
                           ? interaction[index].buttonName
                           : interaction[index].buttonNameAlt}
                     </Buttons>{" "}
                     <p>
                        {likeCount > 0 && item.buttonName === "Like"
                           ? "🐶"
                           : null}
                     </p>
                  </>
               );
            })}
         </S.InteractionList>
      </>
   );
}
