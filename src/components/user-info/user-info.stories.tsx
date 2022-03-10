/* eslint-disable @next/next/no-img-element */
import React from "react";
import { UserInfo } from "./user-info.component";
import { ComponentMeta } from "@storybook/react";
import { TUserInfoProps } from "./user-info.definition";
import { jennifer } from "../../../dummy-data/dummy-data";

export default {
   title: "User Info",
   component: UserInfo,
   argTypes: {
      user: {
         description:
         "User info object from database.Takes the user passed as prop to the page.",

      },
      className: {
         description:
         "Element class. Takes a string",
      },
   },
} as ComponentMeta<typeof UserInfo>;

const Template = ({
    user,
}: TUserInfoProps) => {
   return (
      <UserInfo
         user={user}
      />
   );

};

export const aUserInfo: any = Template.bind({});

aUserInfo.args = {
   user: jennifer,
};
