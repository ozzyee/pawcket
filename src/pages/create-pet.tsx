import { NextPage } from "next";
import { CreateProfileForm } from "../layouts/create-profiles-form/create-profiles.component";

const CreatePet: NextPage = () => {
    return (
        <CreateProfileForm
        topTitle="Upload Photo"
        bottomTitle="Create Pet Profile"
        background="/frame.svg"
        foreground={`"+"`}
        isPet={true}
        />
    );
 };
 
 export default CreatePet;
 