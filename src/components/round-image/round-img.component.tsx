import React from "react";
import { TRoundImageProps } from "./round-image.definition";
import * as S from "./round-image.style";

export function RoundImage({src, diameter}: TRoundImageProps){

    return(
        <S.RoundPhoto src={src} diameter={diameter} />
    )
}