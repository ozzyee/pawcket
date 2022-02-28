import React from "react";
import { Return } from "./returnbutton.component";
import { ComponentMeta } from "@storybook/react";
import { TReturnProp } from "./returnbook.definition";

export default {
   title: "Return Button",
   component: Return,
} as ComponentMeta<typeof Return>;

const Template = ({}: TReturnProp) => {
   return <Return></Return>;
};

export const allReturn: any = Template.bind({});
