  /* eslint-disable @next/next/no-img-element */
  import React from "react";
  import { LoginForm } from "./log-in-form.component";
  import { ComponentMeta } from "@storybook/react";


  export default {
    title: "LoginForm",
    component: LoginForm,
  } as ComponentMeta<typeof LoginForm>;

  const Template = () => {
   return (
      <div>
         <LoginForm />
      </div>
   );
  };
  
  export const allLoginForm = Template.bind({});
