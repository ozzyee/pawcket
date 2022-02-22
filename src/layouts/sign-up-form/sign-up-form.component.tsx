import React, { FormEvent, useState } from "react";
import { AuthLogin } from "../../components/auth-login/auth-login.component";
import { Buttons } from "../../components/buttons/buttons.component";
import { FormInputs } from "../../components/form-inputs/form-inputs.component";
import { errorMessage } from "../../functions/firebase-err-msg";
import { AuthService } from "../../lib/auth-service/auth.service";
import { Validation } from "./function/validation";
import { TSignUpFormProps } from "./sign-up-form.definition";

import * as S from "./sign-up-form.style";

export function SignUpForm({ className }: TSignUpFormProps) {
   const authLogin = new AuthService();

   const [formData, setFormData] = useState({
      email: "",
      password: "",
      confirm: "",
   });

   const onSignUp = async (evt: FormEvent) => {
      evt.preventDefault();
      const errors = Validation(formData);
      console.log(errors);

      if (!errors.email && !errors.password && !errors.confirm) {
         const firebaseErr = await authLogin.signup({
            email: formData.email,
            password: formData.password,
         });
         const customErr =errorMessage(firebaseErr)

         console.log("the error is form fb =>", customErr);
      }
   };

   return (
      <S.SignUpForm className={className} onSubmit={onSignUp}>
         <FormInputs
            inputType="email"
            placeholder="Email"
            className="input"
            onChange={(evt) => {
               setFormData({
                  ...formData,
                  email: evt.target.value,
               });
            }}
         />
         <FormInputs
            inputType="password"
            placeholder="Password"
            className="input"
            onChange={(evt) => {
               setFormData({
                  ...formData,
                  password: evt.target.value,
               });
            }}
         />
         <FormInputs
            inputType="password"
            placeholder="Confirm Password"
            className="input"
            onChange={(evt) => {
               setFormData({
                  ...formData,
                  confirm: evt.target.value,
               });
            }}
         />
         <Buttons className="login-btn">Sign Up</Buttons>

         <S.AuthLoginWrapper>
            <AuthLogin />
         </S.AuthLoginWrapper>
      </S.SignUpForm>
   );
}
