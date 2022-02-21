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
      inputPlaceholder: {
         description:
            "This is a placeholder attribute which allows you to display the 'hint' in the input field  before the user enters a value.",
      },
      inputClass: {
         description:
            "It is a className which allows you to name any class you want and style individually",
      },
   },
} as ComponentMeta<typeof FormInput>;

const Template = ({ inputType, inputPlaceholder, inputClass }: TFormInput) => {
   return (
      <FormInput
         inputType={inputType}
         inputPlaceholder={inputPlaceholder}
         inputClass={inputClass}
      />
   );
};

export const allFormInputs: any = Template.bind({});

allFormInputs.args = {
   inputType: "password",
   inputPlaceholder: "Password",
   inputClass: "password",
};
