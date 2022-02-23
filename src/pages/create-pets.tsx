import type { NextPage } from "next";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import { SvgCanvas } from "../components/svg-canvas/svg-canvas.component";
import Frame from "../../public/frame.svg"
import { Buttons } from "../components/buttons/buttons.component";
import { FormInputs } from "../components/form-inputs/form-inputs.component";
import { Text } from "../components/text/text.component";

const CreatePets: NextPage = () =>{
    return(
        <MainLayout
        topTitle="Upload Photo"
        bottomTitle="Create Pet Profile"
        topChildren={<Frame className={"logo"}/>}
        >
            <form>
                <FormInputs placeholder="Name" inputType="input"></FormInputs>
                <FormInputs placeholder="Bio" inputType="text-area"></FormInputs>
                <Text>Pet Passport</Text>
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