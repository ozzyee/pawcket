/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FormInputs } from "./form-inputs.component";
import { ComponentMeta } from "@storybook/react";
import { TFormInputsProps } from "./form-inputs.definition";

export default {
   title: "FormInputs",
   component: FormInputs,
   argTypes: {
      className: {
         description:
            "This is className for the from inputs this is on the inputs just incase we wont to adjust the stye in another location",
      },
      placeholder: {
         description: "This is the placeholder for the inputs",
      },
      inputType: {
         description: `This is the input type E.g password, email, textarea`,
      },
   },
} as ComponentMeta<typeof FormInputs>;

const Template = ({
   className,
   placeholder,
   inputType,
   onChange,
}: TFormInputsProps) => {
   return (
      <FormInputs
         className={className}
         inputType={inputType}
         placeholder={placeholder}
         onChange={onChange}
      />
   );
};

export const allFromInputs: any = Template.bind({});

allFromInputs.args = {
   className: "",
   placeholder: "This is a placeholder",
};
