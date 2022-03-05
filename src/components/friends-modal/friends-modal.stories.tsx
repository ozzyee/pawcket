  /* eslint-disable @next/next/no-img-element */
  import React from "react";
  import { FriendsModal } from "./friends-modal.component";
  import { ComponentMeta } from "@storybook/react";


  export default {
    title: "FriendsModal",
    component: FriendsModal,
  } as ComponentMeta<typeof FriendsModal>;

  const Template = () => {
   return (
      <div>
         <FriendsModal />
      </div>
   );
  };
  
  export const allFriendsModal = Template.bind({});
