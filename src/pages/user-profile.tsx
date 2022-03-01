import { NextPage } from "next";
import { useState } from "react";
import { RoundImage } from "../components/round-image/round-img.component";
import { PassportWrapper } from "../components/passport-wrapper/passport-wrapper.component";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import { Frame } from "../components/frame/frame.component";
import { Text } from "../components/text/text.component";
import { Buttons } from "../components/buttons/buttons.component";
import { Navbar } from "../components/navbar/navbar.component";
import * as data from "../../dummy-data/dummy-data";
import * as S from "../styles/user-profile"
import router from "next/router";

const UserProfile: NextPage = () => {

    const[user, setUser] = useState({...data.jennifer})

    return (
        
    <MainLayout
      bottomTitle={user.username}
      topChildren={<Frame background="/frame.svg" foreground={"url(/circle.svg)"} width={115} height={115}/>}
      >
    <S.InfoSection>
        <Text className="bio">
            {`${user.extraInfo}`}
        </Text>
        <Text className="placeholder">
                {"Address:"}
        </Text>
        <Text>
            {`${user.address}`}
        </Text>
        <Text className="placeholder">
            {"Date of Birth:"}
        </Text>
        <Text>
            {`${user.dateOfBirth}`}
        </Text>
    </S.InfoSection>
    <PassportWrapper separatorText="My Pets">
        {[
        <S.PetsSection>
        {user.pets.map( (pet) => {
            return(<RoundImage src={pet.profilePic} diameter={100} caption={pet.name}/>)
        })}
        <Buttons 
            children="+" 
            dark={true}
            onClick={() =>
                router.push("/create-pet", undefined, { shallow: true })
             }
        />
        </S.PetsSection>,
        ]}
    </PassportWrapper>
    <Navbar/>
    </MainLayout>
    );
 };
 
 export default UserProfile;
 