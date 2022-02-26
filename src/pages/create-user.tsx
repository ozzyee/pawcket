import { NextPage } from "next";
import { CreateProfileForm } from "../layouts/create-profiles-form/create-profiles.component";

const CreateUser: NextPage = () => {
    return (
        <CreateProfileForm
        topTitle="Upload Photo"
        bottomTitle="Create User Profile"
        background="/frame.svg"
        foreground={`"+"`}
        separatorText="User Info"
        isPet={false}
        />
    );
 };
 
 export default CreateUser;