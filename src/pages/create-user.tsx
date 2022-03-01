import { NextApiRequest, NextApiResponse, NextPage } from "next";
import { Frame } from "../components/frame/frame.component";
import { CreateProfileForm } from "../layouts/create-profiles-form/create-profiles.component";
import { MainLayout } from "../layouts/main-layout/main-layout.component";

const CreateUser: NextPage = () => {
   return (
      <>
         <MainLayout desktopCard={true} className="desktop-display-block">
            <CreateProfileForm />
         </MainLayout>

         <MainLayout
            topTitle="Pawcket"
            bottomTitle="Welcome!"
            className="desktop-display-none"
            topChildren={<Frame background={"/frame.svg"} foreground={`"+"`} />}
         >
            <CreateProfileForm />
         </MainLayout>
      </>
   );
};



export default CreateUser;
