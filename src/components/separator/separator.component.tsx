import React from "react";
import { TGlowingLine } from "./separator.definition";
import * as S from "./separator.style";

export function Separator({ separatorText }: TGlowingLine){
    return(
        <S.GlowingLine separatorText={separatorText}/>
    )

}