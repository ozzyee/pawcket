import React from "react";
import * as S from "./form-area.style";
import { TFormArea } from "./form-area.definition";

export function FormArea({ areaPlaceholder, areaClass }: TFormArea) {
   return <S.Area placeholder={areaPlaceholder} className={areaClass} />;
}
