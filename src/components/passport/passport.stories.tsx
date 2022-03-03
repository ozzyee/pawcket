/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Passport } from "./passport.component";
import { ComponentMeta } from "@storybook/react";

export default {
   title: "Passport",
   component: Passport,
} as ComponentMeta<typeof Passport>;

const Template = () => {
   return (
      <div>
         <Passport
            pet={{
               name: "",
               bio: undefined,
               sex: undefined,
               dateOfBirth: undefined,
               personality: undefined,
               medications: undefined,
               weight: undefined,
               aboutMe: undefined,
               profilePic: undefined,
            }}
         />
      </div>
   );
};

export const allPassport = Template.bind({});
