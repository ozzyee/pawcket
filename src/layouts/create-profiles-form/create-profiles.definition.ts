export type TCreateProfileProps = {
   background: string;
   foreground: string;
};

export type TCreatUser = {
   firstName?: string;
   lastName?: string;
   userName?: string;
   DOB?: Date | string;
   address?: string;
   postCode?: string;
   tel?: string;
   extraInfo?: string;
   userImage?: string;
};

export type TCreateUserLayoutProps = {
   dateObject: {
      email?: string;
      firstName?: string;
      lastName?: string;
      userID?: string;
      DOB?: string;
      extraInfo?: string;
      userImage?: string;
      address?: string;
      postCode?: string;
      tel?: string;
   };
   uploadImage?: string;
   userUID: string;
};
