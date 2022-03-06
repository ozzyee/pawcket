import React from "react";
import { TPassportProps } from "./passport.definition";
import * as S from "./passport.style";
import { Text } from "../text/text.component";
export function Passport({ className, pet }: TPassportProps) {
   return (
      <S.PassportDiv className={className}>
         <Text className="placeholder">{"Name:"}</Text>
         <Text>{`${pet.name}`}</Text>
         <Text className="placeholder">{"Sex:"}</Text>
         <Text>{`${pet.sex}`}</Text>
         <Text className="placeholder">{"Date of Birth:"}</Text>
         <Text>{`${pet.dateOfBirth}`}</Text>
         <Text className="placeholder">{"Personality:"}</Text>
         <Text>{`${pet.petPersonality}`}</Text>
         <Text className="placeholder">{"Medication:"}</Text>
         <Text>{`${pet.petMedication}`}</Text>
         <Text className="placeholder">{"Weight:"}</Text>
         <Text>{`${pet.petWeight}`}</Text>
         <Text className="placeholder">{"About me:"}</Text>
         <Text className="aboutMe">{`${pet.petExtraInfo}`}</Text>
      </S.PassportDiv>
   );
}
