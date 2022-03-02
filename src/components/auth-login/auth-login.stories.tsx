/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AuthLogin } from "./auth-login.component";
import { ComponentMeta } from "@storybook/react";

export default {
   title: "AuthLogin",
   component: AuthLogin,
} as ComponentMeta<typeof AuthLogin>;

const Template = () => {
   return (
      <div>
         <AuthLogin root={""} />
      </div>
   );
};

export const AuthLoginComp = Template.bind({});
