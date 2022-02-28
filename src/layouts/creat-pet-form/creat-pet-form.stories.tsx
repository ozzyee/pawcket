  /* eslint-disable @next/next/no-img-element */
  import React from "react";
  import { CreatePetForm } from "./creat-pet-form.component";
  import { ComponentMeta } from "@storybook/react";


  export default {
    title: "CreatePetForm",
    component: CreatePetForm,
  } as ComponentMeta<typeof CreatePetForm>;

  const Template = () => {
   return (
      <div>
         <CreatePetForm />
      </div>
   );
  };
  
  export const allCreatePetForm = Template.bind({});
