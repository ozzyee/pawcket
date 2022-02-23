import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Navbar } from "./navbar.component";
import { TNavbarProps } from "./navbar.definition";

export default {
   title: "Navbar",
   component: Navbar,
   argTypes: {},
} as ComponentMeta<typeof Navbar>;

const Template = ({}: TNavbarProps) => {
   return <Navbar />;
};

export const navbar = Template.bind({});
