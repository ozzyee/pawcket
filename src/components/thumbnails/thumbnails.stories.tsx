/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TThumbnailsProps } from "./thumbnails.definition";
import { Thumbnails } from "./thumbnails.component";
import { ComponentMeta } from "@storybook/react";
import * as data from "../../../dummy-data/dummy-data"

export default {
   title: "Thumbnails",
   component: Thumbnails,
   argTypes: {
      data: {
         description:
         "Is the array of objects(friends or pets) from the user object served by firebase.. Takes an array of friends or pets",

      },
      isForPets: {
         description:
         "A boolean value that change the default image of the thumbnails. Takes a boolean",
      },
      isAFriend: {
         description:
         "A boolean value that will display or not the add buttons. Takes a boolean",
      },
      userName: {
         description:
         "User's name to be displayed if there's not pets or friends to diasplay. Takes a string",
      },
      className: {
         description:
         "Element class. Takes a string",
      },
   },
} as ComponentMeta<typeof Thumbnails>;

const Template = ({
    isForPets,
    data
}: TThumbnailsProps) => {
   return (
      <Thumbnails
         isForPets={isForPets}
         isAFriend={false}
         data={data}
      />
   );

};

export const aThumbnails: any = Template.bind({});

aThumbnails.args = {
   isForPets: true,
   data: [data.tony, data.freddie]
};
