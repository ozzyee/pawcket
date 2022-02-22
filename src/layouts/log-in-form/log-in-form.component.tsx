import React from "react";
import { AuthLogin } from "../../components/auth-login/auth-login.component";
import { Buttons } from "../../components/buttons/buttons.component";
import { FormInputs } from "../../components/form-inputs/form-inputs.component";
import { TLoginFormProps } from "./log-in-form.definition";
import * as S from "./log-in-form.style";

export function LoginForm({ className }: TLoginFormProps) {
   return (
      <S.LoginFormDiv className={className}>
         <FormInputs inputType="email" placeholder="Email" className="input" />
         <FormInputs
            inputType="password"
            placeholder="Password"
            className="input"
         />
         <Buttons className="login-btn">Log in</Buttons>
         <S.AuthLoginWrapper>
            <AuthLogin />
         </S.AuthLoginWrapper>
      </S.LoginFormDiv>
   );
}
