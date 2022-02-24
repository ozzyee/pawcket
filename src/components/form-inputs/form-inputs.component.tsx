import React from "react";
import { TFormInputsProps } from "./form-inputs.definition";
import * as S from "./form-inputs.style";

export function FormInputs({
   className,
   placeholder,
   inputType,
   onChange,
   // required,
   error,
   errorMsg,
}: TFormInputsProps) {
   if (inputType === "text-area") {
      return <S.TextArea placeholder={placeholder} className={className} />;
   }

   return (
      <S.InputWrapper>
         <S.Input
            className={className}
            type={inputType}
            placeholder={`placeholder`}
            onChange={onChange}
         />

         {error && <S.ErrorMessage>{errorMsg}</S.ErrorMessage>}
      </S.InputWrapper>
   );
}
