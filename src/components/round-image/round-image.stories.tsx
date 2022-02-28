import React from "react";
import { RoundImage } from "./round-img.component";
import { ComponentMeta } from "@storybook/react";
import { TRoundImageProps } from "./round-image.definition";

export default {
    title: "Round Image",
    component: RoundImage,
    argTypes: {
        src:{
            desciption: "URL for the picture.Takes a string"
        },
        diameter:{
            description: "Image circle container diameter"
        }
    },
} as ComponentMeta<typeof RoundImage>;

const Template = ({src, diameter}: TRoundImageProps) =>{
    return <RoundImage src={src} diameter={diameter}/>
};

export const aRoundImage: any = Template.bind({});
aRoundImage.args = {
    src: "https://www.askideas.com/media/35/Animal-Makes-Funny-Face.jpg",
    diameter: 300
}

