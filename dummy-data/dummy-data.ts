import { TPet } from "../src/layouts/creat-pet-form/creat-pet-form.definition";

export type TUser = {
   firstName?: string;
   lastName?: string;
   userName?: string;
   address?: string;
   DOB?: string;
   telephone?: string;
   extraInfo?: string;
   userImage?: string;
   postCode?: string;
   pets?: TPet[];
   friends?: TUser[];
   userID?: string;
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
   image: "/dummy/freddie.jpg",
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
   image: "/dummy/tony.jpg",
};

export const jennifer: TUser = {
   userID: "BKoGsLPWFWV9BSUrDNCYpAOj6Tx2",
   firstName: "Jennifer",
   lastName: "Jones",
   address: "123 Street Rd.",
   DOB: `"Fri Feb 29 1988 15:44:08 GMT+0000 (Greenwich Mean Time)"`,
   telephone: "N/A",
   userName: "Jennifer",
   extraInfo: "I'm thecnically 8 years old.",
   userImage: "",
   pets: [tony, freddie],
   friends: [],
};

export const peter: TUser = {
   userID: "Z7KsLZGQCGgjYvdVVtxAfP1x48x1",
   firstName: "Peter",
   lastName: "Peters",
   address: "123 Avenue Rd.",
   DOB: `"Fri Jun 29 1955 15:44:08 GMT+0000 (Greenwich Mean Time)"`,
   telephone: "N/A",
   userName: "Petey",
   extraInfo: "I'm learning how to use my phone.",
   userImage:
      "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_480x270/public/media/image/2018/01/peter-griffin.jpg?itok=BgXuBkEr",
   pets: [],
   friends: [],
};

export const onCallVets = [
   {
      id: 128,
      name: "Patricia",
      phone: 233,
      address: "53, Mariot Way",
      website: "www.pawtricia.com",
      distance: "10",
   },
   {
      id: 129,
      name: "Dave",
      phone: 781,
      address: "98, Sumit Close",
      website: "www.supergoodvet.com",
      distance: "30",
   },
   {
      id: 130,
      name: "Medivet",
      phone: 855,
      address: "3, Leopold Drive",
      website: "www.medivet.com",
      distance: "50",
   },
];
