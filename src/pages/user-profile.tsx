import { NextPage } from "next";
import { PassportWrapper } from "../components/passport-wrapper/passport-wrapper.component";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import { Frame } from "../components/frame/frame.component";

const UserProfile: NextPage = () => {
    return (
        
    <MainLayout
      topTitle="Pawcket"
      bottomTitle="Welcome!"
      topChildren={<Frame background="/frame.svg" foreground={`"+"`}/>}
    >
        <PassportWrapper
        separatorText="Test"
        />
    </MainLayout>
    );
 };
 
 export default UserProfile;
 