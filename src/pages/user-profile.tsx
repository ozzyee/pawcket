import { NextPage } from "next";
import { useState } from "react";
import { PassportWrapper } from "../components/passport-wrapper/passport-wrapper.component";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import { Frame } from "../components/frame/frame.component";
import { Text } from "../components/text/text.component";
import * as data from "../../dummy-data/dummy-data"

const UserProfile: NextPage = () => {

    const[user, setUser] = useState({...data.jennifer})

    return (
        
    <MainLayout
      bottomTitle={user.username}
      topChildren={<Frame background="/frame.svg" foreground={"url(/circle.svg)"} width={115} height={115}/>}
      >
        <Text>
            {`
            ${user.extraInfo}\n
            Address\n
            ${user.address}
            Date of Birth\n
            ${user.dateOfBirth}\n
            `}
        </Text>
    <PassportWrapper separatorText="My Pets">
        {[
        <img src={user.pets[0].profilePic}></img>,
        <img src={user.pets[1].profilePic}></img>
        ]}
    </PassportWrapper>
    </MainLayout>
    );
 };
 
 export default UserProfile;
 