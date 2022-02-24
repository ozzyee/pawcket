import type { NextPage } from "next";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import { Buttons } from "../components/buttons/buttons.component";
import { FormInputs } from "../components/form-inputs/form-inputs.component";
import { Text } from "../components/text/text.component";
import * as S from "../styles/create-profiles.style";

const CreatePets: NextPage = () =>{
    return(
        <MainLayout
        topTitle="Upload Photo"
        bottomTitle="Create Pet Profile"
        topChildren={<S.CrossFrame background="/frame.svg" foreground={`"+"`}/>}
        >
            <form>
                <FormInputs placeholder="Name" inputType="input"></FormInputs>
                <FormInputs placeholder="Bio" inputType="text-area"></FormInputs>
                <S.GlowingLine text={`"Pet Passport"`}/>
                <FormInputs placeholder="Sex" inputType="input"></FormInputs>
                <FormInputs placeholder="Date of Birth" inputType="input"></FormInputs>
                <FormInputs placeholder="Species" inputType="input"></FormInputs>
                <FormInputs placeholder="Personality" inputType="input"></FormInputs>
                <FormInputs placeholder="Medication" inputType="input"></FormInputs>
                <FormInputs placeholder="Weight" inputType="input"></FormInputs>
                <FormInputs placeholder="Extra Info" inputType="text-area"></FormInputs>
                <div>
                <Buttons dark={false} children="Add Another"></Buttons>
                <Buttons dark={true} children="Continue"></Buttons>
                </div>
            </form>

        </MainLayout>
    )
}

export default CreatePets