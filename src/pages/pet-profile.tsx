import { NextApiRequest, NextPage } from "next";
import { useState } from "react";
import { PassportWrapper } from "../components/passport-wrapper/passport-wrapper.component";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import { Frame } from "../components/frame/frame.component";
import { Text } from "../components/text/text.component";
import { Navbar } from "../components/navbar/navbar.component";
import * as data from "../../dummy-data/dummy-data";
import * as S from "../styles/pet-profile";
import { AuthService } from "../lib/auth-service/auth.service";
import { doc, getDoc } from "@firebase/firestore";
import { firestoreDB } from "../lib/firebase/firebase.initialize";

const PetProfile: NextPage = () => {
   // eslint-disable-next-line no-unused-vars
   const [pet, setUser] = useState({ ...data.freddie });

   return (
      <MainLayout
         bottomTitle={pet.name}
         topChildren={
            <Frame
               background="/frame.svg"
               img={pet.profilePic}
               diameter={280}
            />
         }
      >
         <S.Bio>
            <Text className="bio">{`"${pet.bio}"`}</Text>
            <PassportWrapper separatorText="My Passport">
               <Text className="placeholder">{"Name:"}</Text>,
               <Text>{`${pet.name}`}</Text>,
               <Text className="placeholder">{"Sex:"}</Text>,
               <Text>{`${pet.sex}`}</Text>,
               <Text className="placeholder">{"Date of Birth:"}</Text>,
               <Text>{`${pet.dateOfBirth}`}</Text>,
               <Text className="placeholder">{"Personality:"}</Text>,
               <Text>{`${pet.personality}`}</Text>,
               <Text className="placeholder">{"Medication:"}</Text>,
               <Text>{`${pet.medications}`}</Text>,
               <Text className="placeholder">{"Weight:"}</Text>,
               <Text>{`${pet.weight}`}</Text>,
               <Text className="placeholder">{"About me:"}</Text>,
               <Text className="aboutMe">{`${pet.aboutMe}`}</Text>,
            </PassportWrapper>
         </S.Bio>
         <Navbar />
      </MainLayout>
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
