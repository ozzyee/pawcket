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
            "URL for the backgroundImage property, takes a string",
      },
      foreground: {
         description:
            `String or any type of valid content for content CSS property. In case of string the "" symbols are required, for which is recomended to use back ticks. `,
      },
      width: {
         description:
            "If an SVG is passed to foreground, then width and height are required for which this property takes a number",
      },
      height: {
        description:
           "If an SVG is passed to foreground, then width and height are required for which this property takes a number",
     },
     onClick: {
         description:
            "Takes a function"
     }
   },
} as ComponentMeta<typeof Frame>;

const Template = ({ background, foreground }: TFrameProps) => {
   return <Frame background={background} foreground={foreground}/>;
};

export const aFrame: any = Template.bind({});
aFrame.args = {
   background: "/frame.svg",
   foreground: `"+"`
};