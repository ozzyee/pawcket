/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Buttons } from "./buttons.component";
import { ComponentMeta } from "@storybook/react";
import { TButtonsProps } from "./buttons.definition";

export default {
   title: "Buttons",
   component: Buttons,
   argTypes: {
      children: {
         description:
            "This is the button text we are using the children key word as we wont to call the button as a normal button",
      },
      className: {
         description:
            "This is className for the button this is on the butt just incase we wont to adjust the stye in another location",
      },
      dark: {
         description:
            "this is the boolean for the button this changes the background color between light yellow and orange this is set to yellow by default",
      },
   },
} as ComponentMeta<typeof Buttons>;

const Template = ({ children, className, dark }: TButtonsProps) => {
   return (
      <Buttons className={className} dark={dark}>
         {children}
      </Buttons>
   );
};

export const allButtons: any = Template.bind({});

allButtons.args = {
   children: "Im a button",
   className: "",
   dark: false,
};
