import { NextPage } from "next";
import { Frame } from "../components/frame/frame.component";
import { CreatePetForm } from "../layouts/creat-pet-form/creat-pet-form.component";
import { MainLayout } from "../layouts/main-layout/main-layout.component";

const CreatePet: NextPage = () => {
   return (
      <>
         <MainLayout desktopCard={true} className="desktop-display-block">
            <CreatePetForm />
         </MainLayout>

         <MainLayout
            topTitle="Pawcket"
            bottomTitle="Welcome!"
            bottomSubTitle="create your pet"
            className="desktop-display-none"
            topChildren={<Frame background={"/frame.svg"} foreground={`"+"`} />}
         >
            <CreatePetForm />
         </MainLayout>
      </>
   );
};

export default CreatePet;
