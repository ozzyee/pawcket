import { TUserData } from "../../types/user-data.definition";

export const searchUser = (text: string, allUsers: TUserData[]) => {
   const searchResults = allUsers.filter(
      ({ fullName, fullNameReverse, userName }) => {
         const fullNameLowercase = fullName.toLowerCase();
         const fullNameReverseLowercase = fullNameReverse.toLowerCase();
         const usernameToLowercase = userName?.toLowerCase();

         return (
            fullNameLowercase.startsWith(text.toLowerCase()) ||
            fullNameReverseLowercase.startsWith(text.toLowerCase()) ||
            usernameToLowercase?.startsWith(text.toLowerCase())
         );
      }
   );

   if (!text) {
      return [];
   }

   return [...searchResults];
};
