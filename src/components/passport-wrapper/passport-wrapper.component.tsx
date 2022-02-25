import React from "react";
import { TPassportWrapper } from "./passport-wrapper.definition";
import { Separator } from "../separator/separator.component";
import * as S from "./passport-wrapper.style"

export function PassportWrapper({ separatorText,children }: TPassportWrapper){

    return(
        <S.Wrapper>
            <Separator separatorText={separatorText}/>
            {children}
        </S.Wrapper>
    )
}