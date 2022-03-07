import React from "react";
import { RoundImage } from "./round-img.component";
import { ComponentMeta } from "@storybook/react";
import { TRoundImageProps } from "./round-image.definition";

export default {
    title: "Round Image",
    component: RoundImage,
    argTypes: {
        src:{
            desciption: "URL for the picture. Takes a string"
        },
        diameter:{
            description: "Image circle container diameter. Takes a number"
        },
        caption:{
            description: "Little text under picture, is optional. Takes a string"
        },
        isPet:{
            description: "Determine if it's a pet ot not to change the default image. Takes a boolean"
        },
        className:{
            description: "Element class. Takes a string"
        },
    },
} as ComponentMeta<typeof RoundImage>;

const Template = ({src, diameter}: TRoundImageProps) =>{
    return <RoundImage src={src} diameter={diameter} isPet={true}/>
};

export const aRoundImage: any = Template.bind({});
aRoundImage.args = {
    src: "https://www.askideas.com/media/35/Animal-Makes-Funny-Face.jpg",
    diameter: 300
}

