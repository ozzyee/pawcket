import React from "react";
import { TRoundImageProps } from "./round-image.definition";
import * as S from "./round-image.style";

export function RoundImage({src, diameter, caption, className, onClick}: TRoundImageProps){

    return(
        <S.RoundPhoto src={src} diameter={diameter} caption={caption} className={className} onClick={onClick}/>
    )
}