import React, { FormEvent, useState } from "react";
import { Buttons } from "../../components/buttons/buttons.component";
import { FormInputs } from "../../components/form-inputs/form-inputs.component";
import { Separator } from "../../components/separator/separator.component";
import { ButtonsWrapper } from "../../styles/global.style";
import { Text } from "../../components/text/text.component";
import { TCreatePetFormProps } from "./creat-pet-form.definition";
import * as S from "./creat-pet-form.style";
import { Frame } from "../../components/frame/frame.component";
import { TPetError, Validation } from "./function/validation";
import {TPet} from "../../../dummy-data/dummy-data"
import { useContent } from "../../context/context";


export function CreatePetForm({ className }: TCreatePetFormProps) {
   const [formData, setFormData] = useState<null | TPet>(null);
   const { _setOpen, _setSnackbarType, _setSnackbarMsg, _setError } =
      useContent();
   const [errors, setErrors] = useState<TPet | null>(null);


   const onCreatePet = async (evt: FormEvent) => {
      evt.preventDefault();
      const errors = Validation({
         name : formData?.name,
         sex : formData?.sex,
         dateOfBirth : formData?.dateOfBirth,
      });
      setErrors({
         name: errors?.name,
         sex: errors?.sex,
         dateOfBirth: errors?.dateOfBirth,
      });
   };

   if(errors?.name && errors?.dateOfBirth && errors?.sex){
      _setOpen(true);
      _setSnackbarType("error");
      _setSnackbarMsg("You must fill in all fields.")
   }
   if(errors?.name && !errors?.dateOfBirth && !errors?.sex){
      _setOpen(true);
      _setSnackbarType("error");
      _setSnackbarMsg("You must input a name");
   }
   if(!errors?.name && errors?.dateOfBirth && !errors?.sex){
      _setOpen(true);
      _setSnackbarType("error");
      const error = errors?.dateOfBirth as string;
      _setSnackbarMsg(error);
      _setSnackbarMsg("You must input a Date of Birth!");

   }
   if(!errors?.name && !errors?.dateOfBirth && errors?.sex){
      _setOpen(true);
      _setSnackbarType("error");
      _setSnackbarMsg("You must select a sex. Please type either 'Male' or 'Female'");
   }
   return (
      <>
         <S.CreatePetForm className={className} onSubmit={onCreatePet}>
            <S.FormSplitLeft>
               <S.Wrapper>
                  <S.ImageAndTextWrapper>
                     <Frame background={"/frame.svg"} foreground={`"+"`} />
                     <S.TextHolder>
                        <Text textType="h2" className="sub-heading-h2-upload">
                           Upload
                        </Text>
                        <Text textType="h2" className="sub-heading-h2-img">
                           Photo
                        </Text>
                     </S.TextHolder>
                  </S.ImageAndTextWrapper>
                  <S.CreatePetSpan>
                     <FormInputs
                        placeholder="Name"
                        inputType="input"
                        error={errors?.name}
                        onChange={(evt) => {
                           setFormData({
                              ...formData,
                              name: evt.target.value,
                           });
                        }}
                     />
                     <FormInputs
                        placeholder="Bio"
                        inputType="text-area"
                        onChange={undefined}
                     />

                     <S.ButtonWrapper>
                        <Buttons dark={false} id="form-btn">
                           Continue
                        </Buttons>
                        <Buttons dark={true} id="form-btn">
                           Add Another
                        </Buttons>
                     </S.ButtonWrapper>
                  </S.CreatePetSpan>
               </S.Wrapper>
            </S.FormSplitLeft>

            <Separator separatorText={"Pet Passport"} />
            <S.FormSplitRight>
               <S.Wrapper>
                  <S.DesktopTitle>
                     <Text textType="h2" className="desktop-title">
                        Create your profile
                     </Text>
                  </S.DesktopTitle>
                  <FormInputs
                     placeholder='Sex (Male or Female)'
                     inputType="input"
                     error={errors?.sex}
                     onChange={(evt) => {
                        setFormData({
                           ...formData,
                           sex: evt.target.value,
                        });
                      } }
                  />
                  <FormInputs
                     placeholder="Date of Birth"
                     error={errors?.dateOfBirth}
                     onChange={(evt) => {
                        setFormData({
                           ...formData,
                           dateOfBirth: evt,
                        })
                     }}
                     inputType="date"
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
               </S.Wrapper>
            </S.FormSplitRight>

            <ButtonsWrapper id="display-none">
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
