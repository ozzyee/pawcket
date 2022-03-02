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
    separator: {
       description:
       "Value to display or not separator.Takes a boolean",
    },
      separatorText: {
         description:
         "Text in the top of the component. Takes a string",
      },
      className: {
         description:
         "Element class. Takes a string",
      },
   },
} as ComponentMeta<typeof Wrapper>;

const Template = ({
    separatorText,
}: TPassportWrapper) => {
    const styles = {display: "grid", placeContent: "center"}
   return (
      <Wrapper>
          <Separator separatorText={separatorText}/>
          <p style={styles}>{"===> The Profile info goes here <==="}</p>
      </Wrapper>
   );
};

export const aCreateProfileForm: any = Template.bind({});

aCreateProfileForm.args = {
   separatorText: "I'm in the wrapper too!",
};
