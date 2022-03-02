export type TCreateUserPage = {
   data: {
      email?: string;
      firstName?: string;
      lastName?: string;
      userID?: string;
      userImage?: string;
      DOB?: string;
      extraInfo?: string;
   };
   userUID: string;
};
