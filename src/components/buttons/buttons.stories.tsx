/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Buttons } from "./buttons.component";
import { ComponentMeta } from "@storybook/react";

export default {
   title: "Buttons",
   component: Buttons,
} as ComponentMeta<typeof Buttons>;

const Template = () => {
   return (
      <>
         <Buttons>Login</Buttons>
      </>
   );
};

export const allButtons = Template.bind({});
