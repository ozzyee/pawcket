import { TCreatUser } from "../create-profiles.definition";
import moment from "moment";

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

   function isOver13(dateOfBirth: Date) {
      const date13YrsAgo = new Date();
      date13YrsAgo.setFullYear(date13YrsAgo.getFullYear() - 13);
      return dateOfBirth <= date13YrsAgo;
   }
   const date = moment(DOB).format("L");
   const dateSplit = date.split("/");

   if (!DOB) {
      errors.DOB = "You must enter your data of birth.";
   } else if (
      !isOver13(new Date(`${dateSplit[2]}/${dateSplit[0]}/${dateSplit[1]}`))
   ) {
      errors.DOB = "You Too young.";
   }

   return errors;
};
