import { TPet } from "../src/layouts/creat-pet-form/creat-pet-form.definition";

export type TUser = {
   firstName: string;
   lastName: string;
   userName?: string;
   address?: string;
   DOB: string;
   telephone?: string;
   extraInfo?: string;
   profilePic?: string;
   postCode?: string;
   pets?: TPet[];
   friends?: TUser[];
   id?:string;
};

export const freddie: TPet = {

   name: "Freddie",
   bio: "Did you know that I have been considered a frisbee champion for my mad fetch skills? If you love your frisbee as much as I love mine, you should hit me up so we can be a champion team",
   sex: "Male",
   dateOfBirth: "12 of November 2021",
   personality: "Playful",
   medications: "N/A",
   weight: "6 Kilograms",
   aboutMe:
      "Freddie loves playing with his stuffedbear and ragging around the kitchen. It's so funny",
   profilePic: "/dummy/freddie.jpg",
};

export const tony: TPet = {
   name: "Tony",
   bio: "I'm 3 months old but that doesn't stop me. You better wear shoes or prepare yourself for a toe-hunting session with me.",
   sex: "Male",
   dateOfBirth: "5 of December 2021",
   personality: "Shy",
   medications: "N/A",
   weight: "200 Grams",
   aboutMe:
      "Tony is too young to have other cat friends but he'll love to meet you once he put on some grams on!!",
   profilePic: "/dummy/tony.jpg",
};

export const jennifer: TUser = {
   id: "BKoGsLPWFWV9BSUrDNCYpAOj6Tx2",
   firstName: "Jennifer Jones",
   lastName: "Jennifer Jones",
   address: "123 Street Rd.",
   DOB: "29 of February 1988",
   telephone: "N/A",
   userName: "Jennifer",
   extraInfo: "I'm thecnically 8 years old.",
   profilePic: "",
   pets: [tony, freddie],
};

export const peter: TUser = {
    id:"Z7KsLZGQCGgjYvdVVtxAfP1x48x1",
    firstName: "Peter",
    lastName: "Peters",
    address: "123 Avenue Rd.",
    DOB: "1959-08-13T09:48:02.000Z",
    telephone: "N/A",
    userName: "Petey",
    extraInfo: "I'm learning to use my phone.",
    profilePic: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_480x270/public/media/image/2018/01/peter-griffin.jpg?itok=BgXuBkEr",
    pets: [tony, freddie],
 };
