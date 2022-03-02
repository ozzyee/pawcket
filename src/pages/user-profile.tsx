import { NextPage } from "next";
import { useState } from "react";
import { RoundImage } from "../components/round-image/round-img.component";
import { Separator } from "../components/separator/separator.component";
import { PassportWrapper } from "../components/passport-wrapper/passport-wrapper.component";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import { Frame } from "../components/frame/frame.component";
import { Text } from "../components/text/text.component";
import { Buttons } from "../components/buttons/buttons.component";
import { Navbar } from "../components/navbar/navbar.component";
import * as data from "../../dummy-data/dummy-data";
import * as S from "../styles/user-profile";
import router from "next/router";

const UserProfile: NextPage = () => {
   const [user, setUser] = useState({ ...data.jennifer });

   return (
      <>
         <S.Desktop>
            <MainLayout desktopCard={true} className="desktop">
               <S.TopLeft>
                  <Frame
                     background="/frame.svg"
                     img={
                        !user.profilePic || user.profilePic === ""
                           ? "/circle/user-circle.svg"
                           : user.profilePic
                     }
                     diameter={200}
                  />
                  <Text textType="h1" className="name">
                     {user.name}
                  </Text>
               </S.TopLeft>
               <S.TopRight>
                  <Navbar className="desktopNav" />
                  <Text className="bio">{`"${user.extraInfo}"`}</Text>
               </S.TopRight>
               <S.Bottom>
                  <Separator
                     separatorText="My Passport"
                     className="separator"
                  />
                  <PassportWrapper
                     separator={false}
                     className="desktopPassport"
                  >
                     {[
                        <S.PetsSection>
                           {user.pets.map((pet, id) => {
                              return (
                                 <RoundImage
                                    src={pet.profilePic}
                                    diameter={100}
                                    caption={pet.name}
                                    onClick={() =>
                                       router.push("/pet-profile", undefined, {
                                          shallow: true,
                                       })
                                    }
                                    key={id}
                                 />
                              );
                           })}
                           <Buttons
                              children="+"
                              dark={true}
                              onClick={() =>
                                 router.push("/create-pet", undefined, {
                                    shallow: true,
                                 })
                              }
                           />
                        </S.PetsSection>,
                     ]}
                  </PassportWrapper>
               </S.Bottom>
            </MainLayout>
         </S.Desktop>

         <S.Mobile>
            <MainLayout
               bottomTitle={user.username}
               topChildren={
                  <Frame
                     background="/frame.svg"
                     img={
                        !user.profilePic || user.profilePic === ""
                           ? "/circle/user-circle.svg"
                           : user.profilePic
                     }
                     diameter={230}
                  />
               }
               className="mobile"
            >
               <S.InfoSection>
                  <Text className="bio">{`${user.extraInfo}`}</Text>
                  <Text className="placeholder">{"Address:"}</Text>
                  <Text>{`${user.address}`}</Text>
                  <Text className="placeholder">{"Date of Birth:"}</Text>
                  <Text>{`${user.dateOfBirth}`}</Text>
               </S.InfoSection>
               <PassportWrapper separator={true} separatorText="My Pets">
                  {[
                     <S.PetsSection>
                        {user.pets.map((pet, id) => {
                           return (
                              <RoundImage
                                 src={pet.profilePic}
                                 diameter={100}
                                 caption={pet.name}
                                 onClick={() =>
                                    router.push("/pet-profile", undefined, {
                                       shallow: true,
                                    })
                                 }
                                 key={id}
                              />
                           );
                        })}
                        <Buttons
                           children="+"
                           dark={true}
                           onClick={() =>
                              router.push("/create-pet", undefined, {
                                 shallow: true,
                              })
                           }
                        />
                     </S.PetsSection>,
                  ]}
               </PassportWrapper>
               <Navbar className="nav" />
            </MainLayout>
         </S.Mobile>
      </>
   );
};

export default UserProfile;
