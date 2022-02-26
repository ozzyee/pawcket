import { MainLayout } from "../main-layout/main-layout.component";
import { Buttons } from "../../components/buttons/buttons.component";
import { FormInputs } from "../../components/form-inputs/form-inputs.component";
import { Frame } from "../../components/frame/frame.component";
import { Separator } from "../../components/separator/separator.component";
import { TCreateProfileProps } from "./create-profiles.definition";
import * as S from "./create-profiles.style";

export function CreateProfileForm({
   topTitle,
   bottomTitle,
   background,
   foreground,
   separatorText,
   isPet,
}: TCreateProfileProps) {
   return (
      <MainLayout
         topTitle={topTitle}
         bottomTitle={bottomTitle}
         topChildren={<Frame background={background} foreground={foreground} />}
      >
         {isPet ? (
            <>
               <a style={S.SkipStyle} href="">
                  Skip
               </a>
               <>
                  <form>
                     <span>
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
                     </span>

                     <Separator separatorText={separatorText} />
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
                  </form>
                  <div style={S.ButtonsWrapper}>
                     <Buttons dark={false}>Continue</Buttons>
                     <Buttons dark={true}>Add Another</Buttons>
                  </div>
               </>
            </>
         ) : (
            <>
               <form>
                  <Separator separatorText={separatorText} />
                  <span>
                     <FormInputs placeholder="Name" onChange={undefined} />
                     <FormInputs
                        placeholder="Date of Birth"
                        onChange={undefined}
                     />
                  </span>
                  <FormInputs placeholder="Postal Code" onChange={undefined} />
                  <FormInputs placeholder="Telephone" onChange={undefined} />
                  <FormInputs placeholder="Username" onChange={undefined} />
                  <FormInputs
                     placeholder="Extra Info"
                     inputType="text-area"
                     onChange={undefined}
                  />
               </form>
               <div style={S.ButtonsWrapper}>
                  <Buttons dark={false}>Continue</Buttons>
               </div>
            </>
         )}
      </MainLayout>
   );
}
