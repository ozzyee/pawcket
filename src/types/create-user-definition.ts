export type TCreateUserPage = {
   data: {
      email?: string;
      firstName?: string;
      lastName?: string;
      userID?: string;
      userImage?: string;
      DOB?: Date | string;
      extraInfo?: string;
   };
   userUID: string;
};
