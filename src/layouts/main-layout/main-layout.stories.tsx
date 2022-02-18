/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MainLayout } from "./main-layout.component";
import { ComponentMeta } from "@storybook/react";

export default {
   title: "MainLayout",
   component: MainLayout,
} as ComponentMeta<typeof MainLayout>;

const Template = () => {
   return (
      <MainLayout
         imageSrc="/download.png"
         topTitle="title text component goes here"
         bottomTitle="this title will come form text component"
         bottomSubTitle="this sub title will come form text component"
      >
         this is the main area
      </MainLayout>
   );
};

export const allMainLayout = Template.bind({});
