type TPet = {
   name?: string;
   bio?: string;
   sex?: string;
   dateOfBirth?: string;
   personality?: string;
   medications?: string;
   weight?: string;
   aboutMe?: string;
   profilePic?: string;
};

export type TPetError = {
   name?: string | undefined;
   dateOfBirth?: string | undefined;
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
      errors.dateOfBirth = "Give your pet a Date of Birth"
   } else if (/^[dd/mm/yyyy] | [0-9]+$/i.test(dateOfBirth)) {
      errors.dateOfBirth = "What is your pets sex.";
   }
   if (!sex) {
      errors.sex = "What is your pets sex.";
   } else if (!/^[Male]|[Female]{1,6}$/i.test(sex)) {
      errors.sex = "Your pet's name must be under 15 characters.";
   }
   return errors;
};
