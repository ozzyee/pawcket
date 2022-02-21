import React from "react";
import * as S from "./form-input.style";
import { TFormInput } from "./form-input.definition";

export function FormInput({
   inputType,
   inputPlaceholder,
   inputClass,
}: TFormInput) {
   return (
      <S.Input
         className={inputClass}
         type={inputType}
         placeholder={inputPlaceholder}
      />
   );
}
