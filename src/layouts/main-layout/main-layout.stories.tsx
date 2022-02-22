/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MainLayout } from "./main-layout.component";
import { ComponentMeta } from "@storybook/react";
import { TMainLayoutProps } from "./main-layout.definition";

export default {
   title: "MainLayout",
   component: MainLayout,
   argTypes: {
      className: {
         description:
            "This is className for the layout this is just incase we wont to adjust the stye in another location",
      },
      imageSrc: {
         description:
            "This is the src for the img this can be aether local or a url from the db this has to be a string",
      },
      topTitle: {
         description:
            "This is the white title all of the texts form the Text component",
      },
      bottomTitle: {
         description:
            "this is the title on the bottom this is form the Text component",
      },
      bottomSubTitle: {
         description:
            "this is the smaller title witch is also lighter than the main one in the white card this also comes from the Text component ",
      },
      children: {
         description:
            "This is for the content in the card this is a ReactNode this means that we can put anything in her form text to a full on component of components ",
      },
      topChildren: {
         description:
            "This is for the top of the layout this is here just in case we dont wont an image but some other component we can now do so this is also a ReactNode NOTE: if you wont to use this prop you cant use the imageSrc prop",
      },
      desktopCard: {
         description:
            "If you just need to use a card for a desktop layout just set this value to true",
      },
   },
} as ComponentMeta<typeof MainLayout>;

const Template = ({
   className,
   imageSrc,
   topTitle,
   bottomTitle,
   bottomSubTitle,
   children,
   topChildren,
   desktopCard,
}: TMainLayoutProps) => {
   return (
      <MainLayout
         imageSrc={imageSrc}
         topTitle={topTitle}
         bottomTitle={bottomTitle}
         bottomSubTitle={bottomSubTitle}
         className={className}
         topChildren={topChildren}
         desktopCard={desktopCard}
      >
         {children}
      </MainLayout>
   );
};

export const allMainLayout: any = Template.bind({});

allMainLayout.args = {
   className: "",
   imageSrc: "download.png",
   topTitle: "Upload Image",
   bottomTitle: "Welcome!",
   bottomSubTitle: "Login",
   children: "this is the child",
   topChildren: {},
   desktopCard: false,
};
