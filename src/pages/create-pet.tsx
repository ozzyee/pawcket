import { NextPage } from "next";
import { CreateProfileForm } from "../layouts/create-profiles-form/create-profiles.component";

const CreatePet: NextPage = () => {
    return (
        <CreateProfileForm/>
    );
 };
 
 export default CreatePet;
 

//  <MainLayout
//         topTitle="Upload Photo"
//         bottomTitle="Create Pet Profile"
//         topChildren={<Frame background="/frame.svg" foreground={`"+"`}/>}
//         >
//             <a style={S.SkipStyle} href="">
//                 Skip
//             </a>
//             <form>
//                 <FormInputs placeholder="Name" inputType="input"></FormInputs>
//                 <FormInputs placeholder="Bio" inputType="text-area"></FormInputs>
//                 <S.GlowingLine text={`"Pet Passport"`}/>
//                 <FormInputs placeholder="Sex" inputType="input"></FormInputs>
//                 <FormInputs placeholder="Date of Birth" inputType="input"></FormInputs>
//                 <FormInputs placeholder="Species" inputType="input"></FormInputs>
//                 <FormInputs placeholder="Personality" inputType="input"></FormInputs>
//                 <FormInputs placeholder="Medication" inputType="input"></FormInputs>
//                 <FormInputs placeholder="Weight" inputType="input"></FormInputs>
//                 <FormInputs placeholder="Extra Info" inputType="text-area"></FormInputs>
//             </form>
//             <div style={S.ButtonsWrapper}>
//                 <Buttons dark={false} children="Continue"></Buttons>
//                 <Buttons dark={true} children="Add Another"></Buttons>
//             </div>

//         </MainLayout>
//     )
// }
