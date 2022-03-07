import React from "react";
import * as S from "./interaction-ribbon.style";

export function InterationRibbon() {
   const interaction = [
      {
         buttonName: "Like",
      },
      {
         buttonName: "Comment",
      },
      {
         buttonName: "Share",
      },
   ];

   return (
      <>
         <S.InteractionList>
            {interaction.map((item) => {
               return (
                  <S.InteractionButton>{item.buttonName}</S.InteractionButton>
               );
            })}
         </S.InteractionList>
      </>
   );
}
