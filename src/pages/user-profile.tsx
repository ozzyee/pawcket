import { NextPage } from "next";
import { useState } from "react";
import { RoundImage } from "../components/round-image/round-img.component";
import { PassportWrapper } from "../components/passport-wrapper/passport-wrapper.component";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import { Frame } from "../components/frame/frame.component";
import { Text } from "../components/text/text.component";
import { Buttons } from "../components/buttons/buttons.component";
import * as data from "../../dummy-data/dummy-data";
import * as S from "../styles/user-profile.style"

const UserProfile: NextPage = () => {

    const[user, setUser] = useState({...data.jennifer})
    const[pets] = user.pets

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
        <S.PetsSection>
        <RoundImage src={user.pets[0].profilePic} diameter={100} caption={user.pets[0].name}/>
        <RoundImage src={user.pets[1].profilePic} diameter={100} caption={user.pets[1].name}/>
        </S.PetsSection>,
        <Buttons children="+"/>
        ]}
    </PassportWrapper>
    </MainLayout>
    );
 };
 
 export default UserProfile;
 