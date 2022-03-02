import React from "react";
import { Frame } from "./frame.component";
import { ComponentMeta } from "@storybook/react";
import { TFrameProps } from "./frame.definition";

export default {
   title: "Frame",
   component: Frame,
   argTypes: {
      background: {
         description:
            "URL for the backgroundImage property. Takes a string",
      },
      img: {
         description:
            `URL for the foreground image property. Takes a string `,

      },
      diameter: {
         description:
            "Diameter of the whole frame (foreground is rescaled accordingly) is required. Takes a number",
      },
     onClick: {
         description:
            "Takes a function"
     }
   },
} as ComponentMeta<typeof Frame>;

const Template = ({ background, img, diameter }: TFrameProps) => {
   return <Frame background={background} img={img} diameter={diameter}/>;
};

export const aFrame: any = Template.bind({});
aFrame.args = {
   background: "/frame.svg",
   img:"/dummy/freddie.jpg",
   diameter:200
};