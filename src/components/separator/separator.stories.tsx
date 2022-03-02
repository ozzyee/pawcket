/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Separator } from "./separator.component";
import { ComponentMeta } from "@storybook/react";
import { TGlowingLine } from "./separator.definition";

export default {
   title: "Separator",
   component: Separator,
   argTypes: {
      separatorText: {
         description:
         "Text in the middle of the component. Takes a string",

      },
      className: {
         description:
         "Element class. Takes a string",
      },
   },
} as ComponentMeta<typeof Separator>;

const Template = ({
    separatorText,
}: TGlowingLine) => {
   return (
      <Separator
         separatorText={separatorText}
      />
   );

};

export const aCreateProfileForm: any = Template.bind({});

aCreateProfileForm.args = {
   separatorText: "I'm separating",
};
