import React from "react";
import { Buttons } from "../../components/buttons/buttons.component";
import { FormInputs } from "../../components/form-inputs/form-inputs.component";
import { Separator } from "../../components/separator/separator.component";
import { ButtonsWrapper } from "../../styles/global.style";

import { TCreatePetFormProps } from "./creat-pet-form.definition";
import * as S from "./creat-pet-form.style";

export function CreatePetForm({ className }: TCreatePetFormProps) {
   return (
      <>
         <S.CreatePetForm className={className}>
            <S.CreatePetSpan>
               <FormInputs
                  placeholder="Name"
                  inputType="input"
                  onChange={undefined}
               />
               <FormInputs
                  placeholder="Bio"
                  inputType="text-area"
                  onChange={undefined}
               />
            </S.CreatePetSpan>
            <Separator separatorText={"Pet Passport"} />
            <FormInputs
               placeholder="Sex"
               inputType="input"
               onChange={undefined}
            />

            <FormInputs
               placeholder="Date of Birth"
               inputType="input"
               onChange={undefined}
            />
            <FormInputs
               placeholder="Species"
               inputType="input"
               onChange={undefined}
            />
            <FormInputs
               placeholder="Personality"
               inputType="input"
               onChange={undefined}
            />
            <FormInputs
               placeholder="Medication"
               inputType="input"
               onChange={undefined}
            />
            <FormInputs
               placeholder="Weight"
               inputType="input"
               onChange={undefined}
            />
            <FormInputs
               placeholder="Extra Info"
               inputType="text-area"
               onChange={undefined}
            />
            <ButtonsWrapper>
               <Buttons dark={false} id="form-btn">
                  Continue
               </Buttons>
               <Buttons dark={true} id="form-btn">
                  Add Another
               </Buttons>
            </ButtonsWrapper>
         </S.CreatePetForm>
      </>
   );
}
