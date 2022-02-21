import React from "react";
import { ComponentMeta } from "@storybook/react";
// Import the component form the sme folder
import { Buttons } from "./buttons.component";
// import component props types
import { TButtonsProps } from "./buttons.definition";
import { StoryLayout } from "../../styles/global.style";

export default {
   // This is the title of the story
   title: "Buttons",
   // This tells storybook the component we wont to use
   component: Buttons,
   // tis is the information for the args we use at the bottom of the file
   argTypes: {
      // args
      children: {
         // these are the descriptions for the args these will show up in the docs for the story
         description:
            "This is the button text we are using the children key word as we  wont to call the button as a normal button",
      },
      className: {
         description:
            "This is className for the button this is on the button just incase we wont to adjust the stye in another location",
      },
      dark: {
         description:
            "this is the boolean for the button this changes the background color between light yellow and orange this is set to yellow by default",
      },
      // the onclick has a speshal key value pare insider of it this is the action this will then show thee action in the storybook console
      onClick: {
         action: "handle click",
      },
   },
   // this tells storybook the type is of type component
} as ComponentMeta<typeof Buttons>;

// This is the template for storybook this renders the component as a story
// Inside of the function we are passing in pros as we would with a normal component and telling it what types its using
const Template = ({
   children,
   className,
   dark,
   onClick,
   vetsNavBtn,
   allBtns,
}: TButtonsProps) => {
   // We then render the component as we would normally in any other component
   return (
      <StoryLayout>
         <Buttons
            className={className}
            dark={dark}
            onClick={onClick}
            vetsNavBtn={vetsNavBtn}
         >
            {children}
         </Buttons>

         {allBtns && (
            <Buttons
               className={className}
               dark={dark}
               onClick={onClick}
               vetsNavBtn={true}
            >
               {children}
            </Buttons>
         )}
      </StoryLayout>
   );
};

const defaultProps = {
   children: "Im a button",
   className: "",
   dark: false,
};

// we then export it and give it a name the story will be the name of the const
export const allButtons: any = Template.bind({});

// we then call the const and give it some args and then we can use thme in storybook
allButtons.args = {
   ...defaultProps,
   vetsNavBtn: false,
   allBtns: true,
};

export const defaultButtons: any = Template.bind({});

defaultButtons.args = {
   ...defaultProps,
};

export const vetsNavButtons: any = Template.bind({});
vetsNavButtons.args = {
   ...defaultProps,
   vetsNavBtn: true,
};
