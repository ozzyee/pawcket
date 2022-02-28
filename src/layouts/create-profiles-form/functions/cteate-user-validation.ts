import { TCreatUser } from "../create-profiles.definition";

export const createUserValidation = ({
   firstName,
   lastName,
   DOB,
}: TCreatUser) => {
   const errors: TCreatUser = {
      firstName: undefined,
      lastName: undefined,
      DOB: undefined,
   };

   if (!firstName) {
      errors.firstName = "You must enter your first name.";
   } else if (!/[A-Za-z]$/i.test(firstName)) {
      errors.firstName = "You must enter a real first name.";
   }

   if (!lastName) {
      errors.lastName = "You must enter your last name.";
   } else if (!/[A-Za-z]$/i.test(lastName)) {
      errors.lastName = "You must enter a real first name.";
   }

   if (!DOB) {
      errors.DOB = "You must enter your data of birth.";
   }

   console.log("this is the DOB =>", DOB);

   return errors;
};
