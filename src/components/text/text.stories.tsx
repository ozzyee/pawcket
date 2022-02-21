/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Text } from "./text.component";
import { ComponentMeta } from "@storybook/react";
import { TTextProps } from "./text.definition";

export default {
   title: "Text",
   component: Text,
   argTypes: {
      textType: {
         description:
            "This is the type of text you need you have 3 options h1,h2,h3 NOTE: h1 is white",
      },
      children: {
         description:
            "this is the text witch will be renderd we are using the key word children as we wont to call this component the same as a normal html element would be",
      },
      className: {
         description:
            "This is className for the text this is on the text just incase we wont to adjust the stye in another location",
      },
   },
} as ComponentMeta<typeof Text>;

const Template = ({ textType, children }: TTextProps) => {
   return <Text textType={textType}>{children}</Text>;
};

export const allText: any = Template.bind({});
allText.args = {
   textType: "",
   className: "",
   children: "Im text",
};
