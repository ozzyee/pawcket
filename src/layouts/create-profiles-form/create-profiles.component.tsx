import { Buttons } from "../../components/buttons/buttons.component";
import { FormInputs } from "../../components/form-inputs/form-inputs.component";
import { Separator } from "../../components/separator/separator.component";
import { ButtonsWrapper } from "../../styles/global.style";
import { TCreateProfileProps } from "./create-profiles.definition";
import * as S from "./create-profiles.style";

export function CreateProfileForm({}: TCreateProfileProps) {
   return (
      <>
         <S.SkipStyleButton href="">Skip</S.SkipStyleButton>

         <S.CreateUserForm>
            <Separator separatorText="USER INFO" />
            <S.CreateUserSpan>
               <FormInputs placeholder="Name" onChange={undefined} />
               <FormInputs placeholder="Date of Birth" onChange={undefined} />
            </S.CreateUserSpan>
            <FormInputs placeholder="Postal Code" onChange={undefined} />
            <FormInputs placeholder="Telephone" onChange={undefined} />
            <FormInputs placeholder="Username" onChange={undefined} />
            <FormInputs
               placeholder="Extra Info"
               inputType="text-area"
               onChange={undefined}
            />
         </S.CreateUserForm>
         <ButtonsWrapper>
            <Buttons dark={false} id="form-btn">
               Continue
            </Buttons>
         </ButtonsWrapper>
      </>
   );
}
