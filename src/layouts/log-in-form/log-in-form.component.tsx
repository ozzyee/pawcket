import React, { FormEvent, useState } from "react";
import { AuthLogin } from "../../components/auth-login/auth-login.component";
import { Buttons } from "../../components/buttons/buttons.component";
import { FormInputs } from "../../components/form-inputs/form-inputs.component";
import { errorMessage } from "../../functions/firebase-err-msg";
import { AuthService } from "../../lib/auth-service/auth.service";
import { AuthLoginWrapper } from "../../styles/global.style";
import { TLoginFormProps } from "./log-in-form.definition";
import * as S from "./log-in-form.style";

export function LoginForm({ className }: TLoginFormProps) {
   const authLogin = new AuthService();

   const [formData, setFormData] = useState({
      email: "",
      password: "",
   });

   const onLogin = async (evt: FormEvent) => {
      evt.preventDefault();

      if (formData.email && formData.password) {
         console.log("hello");
         const firebaseErr = await authLogin.signinPassword({
            email: formData.email,
            password: formData.password,
         });

         const customErr = errorMessage(firebaseErr);

         console.log("this is the firebase custom error => ", customErr);
      }
   };

   return (
      <S.LoginForm className={className} onSubmit={onLogin}>
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
         <Buttons id="auth-btn">Log in</Buttons>
         <AuthLoginWrapper>
            <AuthLogin />
         </AuthLoginWrapper>
      </S.LoginForm>
   );
}
