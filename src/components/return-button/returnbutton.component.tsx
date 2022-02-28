import { useEffect } from "@storybook/addons";
import Link from "next/link";
import React, { useState } from "react";
import { TReturnProp } from "./returnbook.definition";
import * as S from "./returnbook.style";
import { ReturnButton } from "./returnbook.style";
import Router from "next/router";

export function Return({}: TReturnProp) {
   return <ReturnButton onClick={() => Router.back()}></ReturnButton>;
}
