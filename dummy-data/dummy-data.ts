export type TPet = {
    name?: string;
    bio?: string;
    sex?: string;
    dateOfBirth?: any;
    personality?: string;
    medications?:string;
    weight?: string;
    aboutMe?: string;
    profilePic?: string;
};

export type TUser = {
    name?: string,
    address?: string,
    dateOfBirth?: string,
    telephone?: string,
    username?:string,
    extraInfo?: string,
    profilePic?: string,
    pets?: TPet[]
}

export const freddie: TPet = {
    name: "Freddie",
    bio: "Did you know that I have been considered a frisbee champion for my mad fetch skills? If you love your frisbee as much as I love mine, you should hit me up so we can be a champion team",
    sex: "Male",
    dateOfBirth: "12 of November 2021",
    personality: "Playful",
    medications: "N/A",
    weight: "6 Kilograms",
    aboutMe: "Freddie loves playing with his stuffedbear and ragging around the kitchen. It's so funny",
    profilePic: "/dummy/freddie.jpg",
}

export const tony: TPet = {
    name: "Tony",
    bio: "I'm 3 months old but that doesn't stop me. You better wear shoes or prepare yourself for a toe-hunting session with me.",
    sex: "Male",
    dateOfBirth: "5 of December 2021",
    personality: "Shy",
    medications: "N/A",
    weight: "200 Grams",
    aboutMe: "Tony is too young to have other cat friends but he'll love to meet you once he put on some grams on!!",
    profilePic: "/dummy/tony.jpg",
}

export const jennifer: TUser = {
    name: "Jennifer Jones",
    address: "123 Street Rd.",
    dateOfBirth: "29 of February 1988",
    telephone: "N/A",
    username:"Jennifer J.",
    extraInfo: "I'm thecnically 8 years old.",
    profilePic: "",
    pets: [tony, freddie]
}
