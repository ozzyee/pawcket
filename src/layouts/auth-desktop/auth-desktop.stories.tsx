  /* eslint-disable @next/next/no-img-element */
  import React from "react";
  import { AuthDesktop } from "./auth-desktop.component";
  import { ComponentMeta } from "@storybook/react";


  export default {
    title: "AuthDesktop",
    component: AuthDesktop,
  } as ComponentMeta<typeof AuthDesktop>;

  const Template = () => {
   return (
      <div>
         <AuthDesktop form={undefined} title={""} subTitle={""} footerText={""} footerTextBold={""} />
      </div>
   );
  };
  
  export const allAuthDesktop = Template.bind({});
