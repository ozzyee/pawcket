import React from "react";
import { TFrameProps } from "./frame.definition";
import * as S from "./frame.style";

export function Frame({ background, foreground, diameter, onClick}: TFrameProps){
    return(
        <S.CrossFrame background={background} foreground={foreground} diameter={diameter} onClick={onClick}/>
    )

}