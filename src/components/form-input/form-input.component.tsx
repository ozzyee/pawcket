import React from "react";
import * as S from "./form-input.style";
import { TFormInput } from "./form-input.definition";

export function FormInput({ inputType }: TFormInput) {
   return <S.Input type={inputType} />;
}
