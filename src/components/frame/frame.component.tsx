import React from "react";
import { TFrameProps } from "./frame.definition";
import * as S from "./frame.style";

export function Frame({ background, img, diameter, onClick }: TFrameProps) {
   return (
      <>
         <S.CrossFrame
            background={background}
            img={img}
            diameter={diameter}
            onClick={onClick}
         />
      </>
   );
}
