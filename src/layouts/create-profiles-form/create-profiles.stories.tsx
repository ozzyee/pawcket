/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CreateProfileForm } from "./create-profiles.component";
import { ComponentMeta } from "@storybook/react";
import { TCreateUserLayoutProps } from "./create-profiles.definition";

export default {
   title: "CreateProfileForm",
   component: CreateProfileForm,
   argTypes: {
      topTitle: {
         description: "Main title outside of white card",
      },
      bottomTitle: {
         description: "Subtitle in the white white card",
      },
      background: {
         description: "URL for the backgroundImage property, takes a string",
      },
      foreground: {
         description: `String or any type of valid content for content CSS property. In case of string the "" symbols are required, for which is recomended to use back ticks. `,
      },
      separatorText: {
         description: "This is the smaller yellow text. Takes a string",
      },
      isPet: {
         description: "This is a boolean that defines the form to be used ",
      },
   },
} as ComponentMeta<typeof CreateProfileForm>;

const Template = ({}: TCreateUserLayoutProps) => {
   return <CreateProfileForm dateObject={{ firstName: "bob" }} userUID="123" />;
};

export const aCreateProfileForm: any = Template.bind({});

aCreateProfileForm.args = {
   topTitle: "Upload Image",
   bottomTitle: "Create Pet Profile",
   background: "/frame.svg",
   foreground: `"+"`,
   separatorText: "Pet Passport",
   isPet: true,
};
