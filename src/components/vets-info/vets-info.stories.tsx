/* eslint-disable @next/next/no-img-element */
import React from "react";
import { VetsInfo } from "./vets-info.component";
import { ComponentMeta } from "@storybook/react";
import { TVetsInfoProps } from "./vets-info.definition";

export default {
   title: "VetsInfo",
   component: VetsInfo,
   argTypes: {
      vetName: {
         description:
            "This is the name of the vets this is the title in the card",
      },
      vetPhoneNumber: {
         description:
            "This is the phone number of the vets this has to be a string",
      },
      vetAddress: {
         description: "This is the address of the vets this is required",
      },
      vetWebsite: {
         description:
            "This is the vets website this is required and must be a simple web adders it shouldn't have http:// inside of it ",
      },
      className: {
         description:
            "This is the className for this component this is so we can style if from a different component/layout ",
      },
   },
} as ComponentMeta<typeof VetsInfo>;

const Template = ({
   vetName,
   vetPhoneNumber,
   vetAddress,
   vetWebsite,
   vetDistance,
}: TVetsInfoProps) => {
   return (
      <VetsInfo
         vetName={vetName}
         vetPhoneNumber={vetPhoneNumber}
         vetAddress={vetAddress}
         vetWebsite={vetWebsite}
         vetDistance={vetDistance}
      />
   );
};

export const allVetsInfo: any = Template.bind({});

allVetsInfo.args = {
   vetName: "Pet House Vets",
   vetPhoneNumber: "0121 610 1398",
   vetAddress: "123-125 Witton Lodge Rd, Birmingham B23 5JD",
   vetWebsite: "pethousevets.co.uk",
};
