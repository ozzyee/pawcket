import React from "react";
import { ComponentMeta } from "@storybook/react";
import { FormInput } from "./form-input.component";
import { TFormInput } from "./form-input.definition";

export default {
   title: "Form Inputs",
   component: FormInput,

   argTypes: {
      inputType: {
         description:
            "This is the input type, you can use it to specify what type you want to use e.g password",
      },
   },
} as ComponentMeta<typeof FormInput>;

const Template = ({ inputType }: TFormInput) => {
   return <FormInput inputType={inputType} />;
};

export const allFormInputs: any = Template.bind({});

allFormInputs.args = {
   inputType: "password",
};
