/* eslint-disable react/no-unescaped-entities */
import { NextApiRequest } from "next";
import { useState } from "react";
import { PassportWrapper } from "../../components/passport-wrapper/passport-wrapper.component";
import { Separator } from "../../components/separator/separator.component";
import { Text } from "../../components/text/text.component";
import * as S from "../../styles/pet-profile";
import { AuthService } from "../../lib/auth-service/auth.service";
import { doc, getDoc } from "@firebase/firestore";
import { firestoreDB } from "../../lib/firebase/firebase.initialize";
import { Passport } from "../../components/passport/passport.component";
import { Frame, MainLayout, Navbar } from "../../functions/dynamic-imports";
import Head from "next/head";
import { useRouter } from "next/router";

type TData = {
   _data: TDataObject[];
};

type TDataObject = {
   dateOfBirth: string;
   id: string;
   image: string;
   name: string;
   petBio: string;
   petExtraInfo: string;
   petMedication: string;
   petPersonality: string;
   petSpecies: string;
   petWeight: string;
   sex: string;
};

const PetProfile = ({ _data }: TData) => {
   const router = useRouter();
   const petID = router.asPath.split("/")[2];
   const petData = _data?.filter(({ id }: { id: string }) => id === petID);

   const [pet] = useState({ ...petData[0] });
   if (!pet) return null;

   return (
      <>
         <Head>
            <title>Pawcket | {pet.name}'s Profile </title>
            <html lang="en" />
         </Head>

         <S.Desktop>
            <MainLayout desktopCard={true} className="desktop">
               <S.TopLeft>
                  <Frame
                     background="/frame.svg"
                     img={!pet.image ? "/circle/pet-circle-white.svg" : pet.image}
                     diameter={200}
                  />
                  <Text textType="h1" className="name">
                     {pet?.name ? pet?.name : ""}
                  </Text>
               </S.TopLeft>
               <S.TopRight>
                  <Navbar className="desktopNav" />
                  <Text className="bio">{`"${pet.petBio}"`}</Text>
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
                     img={!pet.image ? "/circle/pet-circle-white.svg" : pet.image}
                     diameter={230}
                  />
               }
               className="mobile"
            >
               <S.Bio>
                  <Text className="bio">{`"${pet.petBio}"`}</Text>
                  <PassportWrapper separator={true} separatorText="My Passport">
                     <Passport pet={pet} />
                  </PassportWrapper>
               </S.Bio>
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
      const docRef = doc(firestoreDB, "pets", userUID);
      const docSnap = await getDoc(docRef);
      const _data = docSnap?.data()?.pets;

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
            _data,
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
