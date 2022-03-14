import React from "react";
import { TPassportProps } from "./passport.definition";
import * as S from "./passport.style";
import { Text } from "../text/text.component";
import { trimPetDate } from "./functions/pet-date-trim";

export function Passport({ className, pet }: TPassportProps) {
   return (
      <S.PassportDiv className={className}>
        {pet.name === undefined ? null :
        <><Text className="placeholder">{"Name:"}</Text>
        <Text>{`${pet.name}`}</Text></>}

        {pet.sex === undefined ? null :
        <><Text className="placeholder">{"Sex:"}</Text>
        <Text>{`${pet.sex}`}</Text></>}

        {pet.dateOfBirth === undefined ? null :
        <><Text className="placeholder">{"Date of Birth:"}</Text>
        <Text>{`${trimPetDate(pet.dateOfBirth)}`}</Text></>}

        {pet.petPersonality === undefined ? null :
        <><Text className="placeholder">{"Personality:"}</Text>
        <Text>{`${pet.petPersonality}`}</Text></>}

        {pet.petMedication === undefined ? null :
        <><Text className="placeholder">{"Medication:"}</Text>
        <Text>{`${pet.petMedication}`}</Text></>}

        {pet.petWeight === undefined ? null :
        <><Text className="placeholder">{"Weight:"}</Text>
        <Text>{`${pet.petWeight}`}</Text></>}

        {pet.petExtraInfo === undefined ? null :
        <><Text className="placeholder">{"About me:"}</Text>
        <Text>{`${pet.petExtraInfo}`}</Text></>}
      </S.PassportDiv>
   );
}
