import { NextPage } from "next";
import { Frame } from "../components/frame/frame.component";
import { CreateProfileForm } from "../layouts/create-profiles-form/create-profiles.component";
import { MainLayout } from "../layouts/main-layout/main-layout.component";

const CreateUser: NextPage = () => {
   return (
      // <CreateProfileForm
      // topTitle="Upload Photo"
      // bottomTitle="Create User Profile"
      // background="/frame.svg"
      // foreground={`"+"`}
      // separatorText="User Info"
      // isPet={false}
      // />

      <MainLayout
         topTitle="Pawcket"
         bottomTitle="Welcome!"
         bottomSubTitle="Login"
         className="desktop-display-none"
         topChildren={<Frame background={"/frame.svg"} foreground={`"+"`} />}
      >
         <CreateProfileForm />
      </MainLayout>
   );
};

export default CreateUser;
