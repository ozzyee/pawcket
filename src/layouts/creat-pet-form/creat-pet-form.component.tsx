import React from "react";
import { Buttons } from "../../components/buttons/buttons.component";
import { FormInputs } from "../../components/form-inputs/form-inputs.component";
import { Separator } from "../../components/separator/separator.component";
import { ButtonsWrapper } from "../../styles/global.style";
import { Text } from "../../components/text/text.component";

import { TCreatePetFormProps } from "./creat-pet-form.definition";
import * as S from "./creat-pet-form.style";
import { Frame } from "../../components/frame/frame.component";

export function CreatePetForm({ className }: TCreatePetFormProps) {
   return (
      <>
         <S.CreatePetForm className={className}>
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
                        onChange={undefined}
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
