import React from "react";
import { TPassportWrapper } from "./passport-wrapper.definition";
import { Separator } from "../separator/separator.component";
import * as S from "./passport-wrapper.style"

export function PassportWrapper({ separator,separatorText,children, className }: TPassportWrapper){

    return(
        <S.Wrapper className={className}>
            {separator ? <Separator separatorText={separatorText}/> : null}
            {children}
        </S.Wrapper>
    )
}
