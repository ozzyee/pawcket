export type TCreatePetFormProps = {
   className?: string;
   userUID: string;
   _data: any;
   uploadImage?: string;
};

export type TPet = {
   name?: string;
   bio?: string;
   sex?: string;
   dateOfBirth?: Date | string;
   personality?: string;
   medications?: string;
   weight?: string;
   aboutMe?: string;
   profilePic?: string;
   petBio?: string;
   petSpecies?: string;
   petPersonality?: string;
   petMedication?: string;
   petWeight?: string;
   petExtraInfo?: string | undefined;
   image?: string;
   id?:string;
};
