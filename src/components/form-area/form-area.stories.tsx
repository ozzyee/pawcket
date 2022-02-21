import React from "react";
import { ComponentMeta } from "@storybook/react";
import { FormArea } from "./form-area.component";
import { TFormArea } from "./form-area.definition";

export default {
   title: "Form Areas",
   component: FormArea,

   argTypes: {
      areaPlaceholder: {
         description:
            "This is a placeholder attribute which allows you to display the 'hint' in the input field  before the user enters a value.",
      },
      areaClass: {
         description:
            "It is a className which allows you to name any class you want and style individually",
      },
   },
} as ComponentMeta<typeof FormArea>;

const Template = ({ areaPlaceholder, areaClass }: TFormArea) => {
   return <FormArea areaPlaceholder={areaPlaceholder} areaClass={areaClass} />;
};

export const allFormAreas: any = Template.bind({});

allFormAreas.args = {
   areaPlaceholder: "Extra information",
   areaClass: "information",
};
