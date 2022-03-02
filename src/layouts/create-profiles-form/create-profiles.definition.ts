export type TCreateProfileProps = {
   foreground?: string;
   width?: number | string;
   height?: number | string;
   background?: any;
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
};

export type TCreateUserLayoutProps = {
   dateObject: {
      email?: string;
      firstName?: string;
      lastName?: string;
      userID?: string;
      userImage?: string;
   };
   userUID: string;
};
