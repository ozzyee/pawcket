  /* eslint-disable @next/next/no-img-element */
  import React from "react";
  import { SignUpForm } from "./sign-up-form.component";
  import { ComponentMeta } from "@storybook/react";


  export default {
    title: "SignUpForm",
    component: SignUpForm,
  } as ComponentMeta<typeof SignUpForm>;

  const Template = () => {
   return (
      <div>
         <SignUpForm />
      </div>
   );
  };
  
  export const allSignUpForm = Template.bind({});
