import React from "react";
import { TAuthLoginProps } from "./auth-login.definition";
import * as S from "./auth-login.style";

export function AuthLogin({ className }: TAuthLoginProps) {
   return (
      <S.AuthLoginDiv className={className}>
         <S.TextHolder>OR</S.TextHolder>
         <S.AuthIcons>
            <S.Button>
               <S.GoogleIcon />
            </S.Button>
            
            <S.Button>
               <S.FacebookIcon />
            </S.Button>
         </S.AuthIcons>
      </S.AuthLoginDiv>
   );
}
