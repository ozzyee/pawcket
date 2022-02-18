/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Text } from "./text.component";
import { ComponentMeta } from "@storybook/react";
import { TTextProps } from "./text.definition";

export default {
   title: "Text",
   component: Text,
   argTypes: {
      fontType: {
         description:
            "This is the type of text you need you have 3 options h1,h2,h3 NOTE: h1 is white",
      },
   },
} as ComponentMeta<typeof Text>;

const Template = ({ fontType }: TTextProps) => {
   return (
      <div>
         <Text fontType={fontType} />
      </div>
   );
};

export const allText: any = Template.bind({});
allText.args = {
   fontType: "",
   className: "",
};
