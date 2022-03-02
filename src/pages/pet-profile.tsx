import { NextPage } from "next";
import { useState } from "react";
import { PassportWrapper } from "../components/passport-wrapper/passport-wrapper.component";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import { Frame } from "../components/frame/frame.component";
import { Text } from "../components/text/text.component";
import { Navbar } from "../components/navbar/navbar.component";
import * as data from "../../dummy-data/dummy-data";
import * as S from "../styles/pet-profile"

const PetProfile: NextPage = () => {

    const[pet, setUser] = useState({...data.freddie})

    return (
    <>
    <S.Desktop>
    <MainLayout desktopCard={true} className="desktop">

        <Frame background="/frame.svg" 
        img={!pet.profilePic || pet.profilePic === "" ? "/circle/user-circle.svg" : pet.profilePic}
        diameter={230}/>

    </MainLayout>
    </S.Desktop>


    <S.Mobile>
    <MainLayout
      bottomTitle={pet.name}
      topChildren={<Frame 
        background="/frame.svg" 
        img={!pet.profilePic || pet.profilePic === "" ? 
        "/circle/user-circle.svg":
        pet.profilePic
        }
        diameter={230}/>}
        className="mobile"
      >
    <S.Bio>
        <Text className="bio">
            {`"${pet.bio}"`}
        </Text>
        <PassportWrapper separatorText="My Passport">
        {[
        <Text className="placeholder">
            {"Name:"}
        </Text>,
        <Text>
            {`${pet.name}`}
        </Text>,
        <Text className="placeholder">
            {"Sex:"}
        </Text>,
        <Text>
            {`${pet.sex}`}
        </Text>,
        <Text className="placeholder">
            {"Date of Birth:"}
        </Text>,
        <Text>
            {`${pet.dateOfBirth}`}
        </Text>,
        <Text className="placeholder">
            {"Personality:"}
        </Text>,
        <Text>
            {`${pet.personality}`}
        </Text>,
        <Text className="placeholder">
            {"Medication:"}
        </Text>,
        <Text>
            {`${pet.medications}`}
        </Text>,
        <Text className="placeholder">
            {"Weight:"}
        </Text>,
        <Text>
            {`${pet.weight}`}
        </Text>,
        <Text className="placeholder">
            {"About me:"}
        </Text>,
        <Text className="aboutMe">
            {`${pet.aboutMe}`}
        </Text>
        ]}
    </PassportWrapper>
    </S.Bio>
    <Navbar/>
    </MainLayout>
    </S.Mobile>
    </>
    );
 };
 
 export default PetProfile;
 