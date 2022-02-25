import React from "react";
import { TFrameProps } from "./frame.definition";
import * as S from "./frame.style";

export function Frame({ background, foreground, width, height, onClick}: TFrameProps){
    return(
        <S.CrossFrame background={background} foreground={foreground} width={width} height={height} onClick={onClick}/>
    )

}