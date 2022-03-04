/* eslint-disable no-unused-vars */
import { NextApiRequest, NextPage } from "next";
import { useState } from "react";
import { RoundImage } from "../components/round-image/round-img.component";
import { Separator } from "../components/separator/separator.component";
import { PassportWrapper } from "../components/passport-wrapper/passport-wrapper.component";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import { Text } from "../components/text/text.component";
import { Buttons } from "../components/buttons/buttons.component";
import * as data from "../../dummy-data/dummy-data";
import * as S from "../styles/user-profile";
import router from "next/router";
import { AuthService } from "../lib/auth-service/auth.service";
import { doc, getDoc } from "@firebase/firestore";
import { firestoreDB } from "../lib/firebase/firebase.initialize";
import { Frame, Navbar } from "../functions/dynamic-imports";
import Head from "next/head";

const UserProfile: NextPage = () => {
   const [user, setUser] = useState({ ...data.jennifer });
   if (!user) return null;
   return (
      <>
         <Head>
            <title>Pawcket | Dashboard</title>
            <html lang="en" />
         </Head>

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
                     {user.firstName}
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
                     <S.PetsSection>
                        {user.pets &&
                           user.pets.map((pet, id) => {
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
                           dark={true}
                           onClick={() =>
                              router.push("/create-pet", undefined, {
                                 shallow: true,
                              })
                           }
                        >
                           +
                        </Buttons>
                     </S.PetsSection>
                  </PassportWrapper>
               </S.Bottom>
            </MainLayout>
         </S.Desktop>

         <S.Mobile>
            <MainLayout
               bottomTitle={user.userName}
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
                  <Text>{`${user.DOB}`}</Text>
               </S.InfoSection>
               <PassportWrapper separator={true} separatorText="My Pets">
                  <S.PetsSection>
                     {user.pets &&
                        user.pets.map((pet, index) => {
                           return (
                              <RoundImage
                                 key={index}
                                 src={pet.profilePic}
                                 diameter={100}
                                 caption={pet.name}
                                 onClick={() =>
                                    router.push("/pet-profile", undefined, {
                                       shallow: true,
                                    })
                                 }
                              />
                           );
                        })}
                     <Buttons
                        dark={true}
                        onClick={() =>
                           router.push("/create-pet", undefined, {
                              shallow: true,
                           })
                        }
                     >
                        +
                     </Buttons>
                  </S.PetsSection>
                  ,
               </PassportWrapper>
               <Navbar className="nav" />
            </MainLayout>
         </S.Mobile>
      </>
   );
};

export async function getServerSideProps({ req }: { req: NextApiRequest }) {
   try {
      const cookieRefreshToken = req.cookies.token;
      const authService = new AuthService();
      const dataRes = await authService.getFirebaseUserToken(
         cookieRefreshToken
      );
      const userUID = dataRes.getIdToken.user_id;
      const docRef = doc(firestoreDB, "users", userUID);
      const docSnap = await getDoc(docRef);
      const _data = docSnap.data();

      // No user then send to login/ sign up page
      if (!dataRes) {
         return {
            redirect: {
               destination: "/",
            },
         };
      }

      console.log(!_data?.DOB);

      if (!_data?.firstName || !_data?.lastName || !_data?.DOB) {
         return {
            redirect: {
               destination: "/create-user",
            },
         };
      }

      return {
         props: {
            userUID,
         },
      };
   } catch (err) {
      console.log("ERR", err);

      return {
         redirect: {
            destination: "/",
         },
      };
   }
}

export default UserProfile;
