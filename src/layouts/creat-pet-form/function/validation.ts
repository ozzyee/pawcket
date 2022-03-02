import { TPet } from "../creat-pet-form.definition";

export type TPetError = {
   name?: string ;
   dateOfBirth?: Date | string;
   sex?: string | undefined;
};

export const Validation = ({ name, dateOfBirth, sex }: TPet) => {
   const errors: TPetError = {
      name: undefined,
      dateOfBirth: undefined,
      sex: undefined,
   };

   if (!name) {
      errors.name = "Give your pet a name.";
   } else if (!/^[A-Z]{1,15}$/i.test(name)) {
      errors.name = "Your pet's name must be under 15 characters.";
   }
   if (!dateOfBirth) {
      errors.dateOfBirth = "Give your pet a Date of Birth";
   }
   if (!sex) {
      errors.sex = "What is your pets sex.";
   } else if (!/^[Male]|[Female]{1,6}$/i.test(sex)) {
      errors.sex = "Your pet's name must be under 15 characters.";
   }
   return errors;
};
