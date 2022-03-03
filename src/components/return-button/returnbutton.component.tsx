import React from "react";
import { TReturnProp } from "./returnbook.definition";
import { ReturnButton } from "./returnbook.style";
import Router from "next/router";

export function Return({}: TReturnProp) {
   return <ReturnButton onClick={() => Router.back()}></ReturnButton>;
}
