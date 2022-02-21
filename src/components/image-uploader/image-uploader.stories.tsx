/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ImageUploader } from "./image-uploader.component";
import { ComponentMeta } from "@storybook/react";
import { TImageUploaderProps } from "./image-uploader.definition";

export default {
   title: "ImageUploader",
   component: ImageUploader,
   argTypes: {
      onChange: {
         action: "handle change",
         description:
            "This function responds back with the url to the uploaded image",
      },
      folder: {
         description: "This is the folder location you are saving the image",
      },
      _ref:{
         description:"This is the ref for the button this lets us change the button for an icon for example"
      }
   },
} as ComponentMeta<typeof ImageUploader>;

const Template = ({ onChange }: TImageUploaderProps) => {
   return (
      <div>
         <ImageUploader folder="test" onChange={onChange} />
      </div>
   );
};

export const allImageUploader = Template.bind({});
