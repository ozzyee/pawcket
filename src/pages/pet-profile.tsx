import { NextApiRequest, NextPage } from "next";
import { useState } from "react";
import { PassportWrapper } from "../components/passport-wrapper/passport-wrapper.component";
import { Separator } from "../components/separator/separator.component";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import { Text } from "../components/text/text.component";
import * as data from "../../dummy-data/dummy-data";
import * as S from "../styles/pet-profile";
import { AuthService } from "../lib/auth-service/auth.service";
import { doc, getDoc } from "@firebase/firestore";
import { firestoreDB } from "../lib/firebase/firebase.initialize";
import { Passport } from "../components/passport/passport.component";
import { Frame, Navbar } from "../functions/dynamic-imports";
import Head from "next/head";

const PetProfile: NextPage = () => {
   const [pet] = useState({ ...data.tony });
   if (!pet) return null;

   return (
      <>
         <Head>
            <title>Pawcket | Pet Profile</title>
         </Head>

         <S.Desktop>
            <MainLayout desktopCard={true} className="desktop">
               <S.TopLeft>
                  <Frame
                     background="/frame.svg"
                     img={
                        !pet.profilePic || pet.profilePic === ""
                           ? "/circle/user-circle.svg"
                           : pet.profilePic
                     }
                     diameter={200}
                  />
                  <Text textType="h1" className="name">
                     {pet?.name ? pet?.name : ""}
                  </Text>
               </S.TopLeft>
               <S.TopRight>
                  <Navbar className="desktopNav" />
                  <Text className="bio">{`"${pet.bio}"`}</Text>
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
                     <Passport pet={pet} />
                  </PassportWrapper>
               </S.Bottom>
            </MainLayout>
         </S.Desktop>

         <S.Mobile>
            <MainLayout
               bottomTitle={pet.name}
               topChildren={
                  <Frame
                     background="/frame.svg"
                     img={
                        !pet.profilePic || pet.profilePic === ""
                           ? "/circle/user-circle.svg"
                           : pet.profilePic
                     }
                     diameter={230}
                  />
               }
               className="mobile"
            >
               <S.Bio>
                  <Text className="bio">{`"${pet.bio}"`}</Text>
                  <PassportWrapper separator={true} separatorText="My Passport">
                     <Passport pet={pet} />
                  </PassportWrapper>
               </S.Bio>
               <Navbar />
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
      const docRef = doc(firestoreDB, "pets", userUID);
      const docSnap = await getDoc(docRef);
      // eslint-disable-next-line no-unused-vars
      const _data = docSnap.data();

      // No user then send to login/ sign up page
      if (!dataRes) {
         return {
            redirect: {
               destination: "/",
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

export default PetProfile;
