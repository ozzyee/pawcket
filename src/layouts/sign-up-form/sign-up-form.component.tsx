import React, { FormEvent, useState } from "react";
import { AuthLogin } from "../../components/auth-login/auth-login.component";
import { Buttons } from "../../components/buttons/buttons.component";
import { FormInputs } from "../../components/form-inputs/form-inputs.component";
import { useContent } from "../../context/context";
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
   const { _setOpen, _setSnackbarType, _setSnackbarMsg, _setError } =
      useContent();

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

      if (errors?.email && errors?.password && errors?.confirm) {
         _setOpen(true);
         _setSnackbarType("error");
         _setSnackbarMsg("You must fill in all fields.");
      }

      if (errors?.email && !errors?.password && !errors?.confirm) {
         _setOpen(true);
         _setSnackbarType("error");
         _setSnackbarMsg(errors?.email);
      }

      if (!errors?.email && errors?.password && errors?.confirm) {
         _setOpen(true);
         _setSnackbarType("error");
         _setSnackbarMsg(errors?.password);
      }

      if (!errors.email && !errors.password && !errors.confirm) {
         const firebaseErr = await authLogin.signup({
            email: formData.email,
            password: formData.password,
         });

         if (firebaseErr) {
            const message = errorMessage(firebaseErr);
            _setOpen(true);
            _setSnackbarType("error");
            _setSnackbarMsg(message);
            _setError(true);
         }
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
            <AuthLogin root={"sign-up"} />
         </AuthLoginWrapper>
      </S.SignUpForm>
   );
}
