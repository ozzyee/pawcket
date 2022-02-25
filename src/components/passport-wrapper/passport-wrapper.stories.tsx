/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Wrapper } from "./passport-wrapper.style";
import { Separator } from "../separator/separator.component";
import { ComponentMeta } from "@storybook/react";
import { TPassportWrapper } from "./passport-wrapper.definition";

export default {
   title: "Passport Wrapper",
   component: Wrapper,
   argTypes: {
      separatorText: {
         description:
         "Text in the top of the component. Takes a string",
      },
   },
} as ComponentMeta<typeof Wrapper>;

const Template = ({
    separatorText,
}: TPassportWrapper) => {
   return (
      <Wrapper>
          <Separator separatorText={separatorText}/>
      </Wrapper>
   );
};

export const aCreateProfileForm: any = Template.bind({});

aCreateProfileForm.args = {
   separatorText: "I'm on the wrapper too!",
};
