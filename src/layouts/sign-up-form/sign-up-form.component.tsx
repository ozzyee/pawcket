import React, { FormEvent, useState } from "react";
import { AuthLogin } from "../../components/auth-login/auth-login.component";
import { Buttons } from "../../components/buttons/buttons.component";
import { FormInputs } from "../../components/form-inputs/form-inputs.component";
import { errorMessage } from "../../functions/firebase-err-msg";
import { AuthService } from "../../lib/auth-service/auth.service";
import { AuthLoginWrapper } from "../../styles/global.style";
import { TErrors } from "../../types/auth-definitions";
import { Validation } from "./function/validation";
import { TSignUpFormProps } from "./sign-up-form.definition";

import * as S from "./sign-up-form.style";

export function SignUpForm({ className }: TSignUpFormProps) {
   const authLogin = new AuthService();
   const [errors, setErrors] = useState<TErrors | null>(null);

   const [formData, setFormData] = useState({
      email: "",
      password: "",
      confirm: "",
   });

   const onSignUp = async (evt: FormEvent) => {
      evt.preventDefault();

      const errors = Validation(formData);

      setErrors({
         email: errors?.email,
         password: errors?.password,
         confirm: errors?.confirm,
      });

      if (!errors.email && !errors.password && !errors.confirm) {
         const firebaseErr = await authLogin.signup({
            email: formData.email,
            password: formData.password,
         });

         const customErr = errorMessage(firebaseErr);
         console.log("the error is form fb =>", customErr);
      }
   };

   return (
      <S.SignUpForm className={className} onSubmit={onSignUp}>
         <FormInputs
            inputType="email"
            placeholder="Email"
            className="input"
            error={errors?.email}
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
            error={errors?.password}
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
            className="input-confirm"
            error={errors?.confirm}
            onChange={(evt) => {
               setFormData({
                  ...formData,
                  confirm: evt.target.value,
               });
            }}
         />

         <Buttons id="auth-btn">Sign Up</Buttons>

         <AuthLoginWrapper>
            <AuthLogin />
         </AuthLoginWrapper>
      </S.SignUpForm>
   );
}
