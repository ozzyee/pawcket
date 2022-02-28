import { NextPage } from "next";
import { useState } from "react";
import { RoundImage } from "../components/round-image/round-img.component";
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
            {`${user.extraInfo}`}
        </Text>
        <Text>
            {"Address"}
        </Text>
        <Text>
            {`${user.address}`}
        </Text>
        <Text>
            {"Date of Birth"}
        </Text>
        <Text>
            {`${user.dateOfBirth}`}
        </Text>
    <PassportWrapper separatorText="My Pets">
        {[
        <RoundImage src={user.pets[0].profilePic} width={150} height={150}/>,
        ]}
    </PassportWrapper>
    </MainLayout>
    );
 };
 
 export default UserProfile;
 