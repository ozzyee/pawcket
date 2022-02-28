import { Buttons } from "../../components/buttons/buttons.component";
import { FormInputs } from "../../components/form-inputs/form-inputs.component";
import { Frame } from "../../components/frame/frame.component";
import { Separator } from "../../components/separator/separator.component";
import { ButtonsWrapper } from "../../styles/global.style";
import { TCreateProfileProps } from "./create-profiles.definition";
import * as S from "./create-profiles.style";
import { Text } from "../../components/text/text.component";

export function CreateProfileForm({}: TCreateProfileProps) {
   return (
      <>
         <S.SkipStyleButton href="">Skip</S.SkipStyleButton>

         <S.CreateUserForm>
            <Separator separatorText="USER INFO" />
            <S.FormSplitRight>
               <S.Wrapper>
                  <S.CreateUserSpan>
                     <S.DesktopTitle>
                        <Text textType="h2" className="desktop-title">
                           Create your profile
                        </Text>
                     </S.DesktopTitle>

                     <FormInputs
                        placeholder="Name"
                        onChange={undefined}
                        inputType="text"
                     />
                     <FormInputs
                        placeholder="Date of Birth"
                        onChange={undefined}
                        inputType="date"
                     />
                  </S.CreateUserSpan>
                  <FormInputs placeholder="Postal Code" onChange={undefined} />
                  <FormInputs placeholder="Telephone" onChange={undefined} />
                  <FormInputs placeholder="Username" onChange={undefined} />
               </S.Wrapper>
            </S.FormSplitRight>

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
                  <FormInputs
                     placeholder="Extra Info"
                     inputType="text-area"
                     onChange={undefined}
                  />

                  <ButtonsWrapper>
                     <Buttons dark={false} id="form-btn">
                        Continue
                     </Buttons>
                  </ButtonsWrapper>
               </S.Wrapper>
            </S.FormSplitLeft>
         </S.CreateUserForm>
      </>
   );
}
