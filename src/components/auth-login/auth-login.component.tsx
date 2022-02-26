import React from "react";
import { AuthService } from "../../lib/auth-service/auth.service";
import { TAuthLoginProps } from "./auth-login.definition";
import * as S from "./auth-login.style";

export function AuthLogin({ className }: TAuthLoginProps) {
   const authLogin = new AuthService();

   return (
      <S.AuthLoginDiv className={className}>
         <S.TextHolder>OR</S.TextHolder>
         <S.AuthIcons>
            <S.Button onClick={authLogin.googleSignIn} type="button">
               <S.GoogleIcon />
            </S.Button>

            <S.Button onClick={authLogin.facebookSignIn} type="button">
               <S.FacebookIcon />
            </S.Button>
         </S.AuthIcons>
      </S.AuthLoginDiv>
   );
}
