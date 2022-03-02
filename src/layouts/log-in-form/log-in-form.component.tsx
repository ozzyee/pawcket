import React, { FormEvent, useState } from "react";
import { AuthLogin } from "../../components/auth-login/auth-login.component";
import { Buttons } from "../../components/buttons/buttons.component";
import { FormInputs } from "../../components/form-inputs/form-inputs.component";
import { useContent } from "../../context/context";
import { errorMessage } from "../../functions/firebase-err-msg";
import { AuthService } from "../../lib/auth-service/auth.service";
import { AuthLoginWrapper } from "../../styles/global.style";
import { TErrors } from "../../types/auth-definitions";
import { TLoginFormProps } from "./log-in-form.definition";
import * as S from "./log-in-form.style";

export function LoginForm({ className }: TLoginFormProps) {
   const authLogin = new AuthService();
   const { _setOpen, _setSnackbarType, _setSnackbarMsg, _setError } =
      useContent();

   const [errors, setErrors] = useState<TErrors | null>(null);
   const [formData, setFormData] = useState({
      email: "",
      password: "",
   });

   const onLogin = async (evt: FormEvent) => {
      evt.preventDefault();

      if (!formData.email && !formData.password) {
         _setOpen(true);
         _setSnackbarType("error");
         _setSnackbarMsg("You must fill in all fields.");
         _setError(true);
      }

      if (!formData.email && formData.password) {
         _setOpen(true);
         _setSnackbarType("error");
         _setSnackbarMsg("You must enter your Email");
         _setError(false);

         setErrors({
            email: "You must enter your Email",
            password: undefined,
         });
      }

      if (formData.email && !formData.password) {
         _setOpen(true);
         _setSnackbarType("error");
         _setSnackbarMsg("You must enter your Password");
         _setError(false);

         setErrors({
            email: undefined,
            password: "You must enter your Password",
         });
      }

      if (formData.email && formData.password) {
         const firebaseErr = await authLogin.signinPassword({
            email: formData.email,
            password: formData.password,
         });

         if (firebaseErr) {
            const message = errorMessage(firebaseErr);
            _setOpen(true);
            _setSnackbarType("error");
            _setSnackbarMsg(message);

            if (message === "Wrong password") {
               setErrors({
                  email: undefined,
                  password: message,
               });
            } else {
               _setError(true);
            }
         }
      }
   };

   return (
      <S.LoginForm className={className} onSubmit={onLogin}>
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
         <Buttons id="auth-btn">Log in</Buttons>
         <AuthLoginWrapper>
            <AuthLogin root="login" />
         </AuthLoginWrapper>
      </S.LoginForm>
   );
}
