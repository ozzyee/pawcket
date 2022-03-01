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
   } else if (!/^[A-Za-z]{1,15}$/i.test(name)) {
      errors.name = "Your pet's name must be under 15 characters.";
   }
   if (!dateOfBirth) {
      errors.dateOfBirth = "Enter pet birth date.";
   } else if (!/^[A-Za-z]{1,15}$/i.test(dateOfBirth)) {
      errors.name = "Your pet's name must be under 15 characters.";
   }
   return errors;
};
