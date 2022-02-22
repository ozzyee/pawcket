import React from "react";
import { AuthLogin } from "../../components/auth-login/auth-login.component";
import { Buttons } from "../../components/buttons/buttons.component";
import { FormInputs } from "../../components/form-inputs/form-inputs.component";
import { TSignUpFormProps } from "./sign-up-form.definition";
import * as S from "./sign-up-form.style";

export function SignUpForm({ className }: TSignUpFormProps) {
   return (
      <S.SignUpFormDiv className={className}>
         <FormInputs inputType="email" placeholder="Email" className="input" />
         <FormInputs
            inputType="password"
            placeholder="Password"
            className="input"
         />
         <FormInputs
            inputType="password"
            placeholder="Confirm Password"
            className="input"
         />
         <Buttons className="login-btn">Sign Up</Buttons>
         
         <S.AuthLoginWrapper>
            <AuthLogin />
         </S.AuthLoginWrapper>
      </S.SignUpFormDiv>
   );
}
