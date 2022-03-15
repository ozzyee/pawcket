/* eslint-disable no-unused-vars */
import { NextApiRequest, NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { RoundImage } from "../components/round-image/round-img.component";
import { Separator } from "../components/separator/separator.component";
import { PassportWrapper } from "../components/passport-wrapper/passport-wrapper.component";
import { Text } from "../components/text/text.component";
import { Buttons } from "../components/buttons/buttons.component";
import { UserInfo } from "../components/user-info/user-info.component";
import * as dummyData from "../../dummy-data/dummy-data";
import * as S from "../styles/user-profile";
import router from "next/router";
import { AuthService } from "../lib/auth-service/auth.service";
import { doc, DocumentData, getDoc } from "@firebase/firestore";
import { firestoreDB } from "../lib/firebase/firebase.initialize";
import { Frame, MainLayout, Navbar } from "../functions/dynamic-imports";
import Head from "next/head";
import { TUser } from "../../dummy-data/dummy-data";
import { TPet } from "../layouts/creat-pet-form/creat-pet-form.definition";
import { Thumbnails } from "../components/thumbnails/thumbnails.component";

type TData = {
   data: TUserData[];
};

type TUserData = {
   firstName: string;
   lastName: string;
   userName?: string;
   address?: string;
   DOB: string;
   telephone?: string;
   extraInfo?: string;
   profilePic?: string;
   postCode?: string;
   pets?: TPet[];
   friends?: TUser[];
   id?: string;
};

const UserProfile = ({ data }: TData) => {
   //    const router = useRouter();
   //    const userID = router.asPath.split("/")[2];
   //    const userData = data?.filter(({ id }: { id: string }) => id === petID);
   //    console.log("this is pet data", petData);

   const [user, setUser] = useState<TUser | DocumentData>({ ...data });
   if (!user) return null;
   console.log(data);

   return (
      <>
         <Head>
            <title>Pawcket | Dashboard</title>
            <html lang="en" />
         </Head>

         <S.Desktop>
            <MainLayout desktopCard={true} className="desktop">
               <S.TopLeft>
                  <Buttons
                     onClick={() =>
                        router.push("/signin", undefined, {
                           shallow: true,
                        })
                     }
                  >
                     LogOut
                  </Buttons>

                  <Frame
                     background="/frame.svg"
                     img={
                        !user.userImage || user.userImage === ""
                           ? "/circle/user-circle-white.svg"
                           : user.userImage
                     }
                     diameter={200}
                  />
                  <Text textType="h1" className="name">
                     {user.firstName}
                  </Text>
               </S.TopLeft>
               <S.TopRight>
                  <Navbar className="desktopNav" />
                  <S.InfoSection className="desktopinfo">
                     <UserInfo user={user} />
                  </S.InfoSection>
               </S.TopRight>
               <S.BottomLeft>
                  <Separator separatorText="Your Pets" className="separator" />
                  <PassportWrapper
                     separator={false}
                     className="desktopPassport"
                  >
                     <Thumbnails
                        isForPets={true}
                        isAFriend={false}
                        data={user.pets}
                        className="desktopPets"
                        userName={user.firstName}
                     />
                  </PassportWrapper>
               </S.BottomLeft>
               <S.BottomRight>
                  <Separator
                     separatorText="Your Friends"
                     className="separator"
                  />
                  <PassportWrapper
                     separator={true}
                     separatorText="Your Friends"
                     className="desktopPassport"
                  >
                     <Thumbnails
                        isForPets={false}
                        isAFriend={false}
                        data={user.friends}
                        className="desktopPets"
                     />
                  </PassportWrapper>
               </S.BottomRight>
            </MainLayout>
         </S.Desktop>

         <S.Mobile>
            <MainLayout
               bottomTitle={user.userName}
               topChildren={
                  <Frame
                     background="/frame.svg"
                     img={
                        !user.userImage || user.userImage === ""
                           ? "/circle/user-circle-white.svg"
                           : user.userImage
                     }
                     diameter={230}
                  />
               }
               className="mobile"
            >
               <S.InfoSection>
                  <UserInfo user={user} />
               </S.InfoSection>
               <PassportWrapper separator={true} separatorText="Your Pets">
                  <Thumbnails
                     isAFriend={false}
                     isForPets={true}
                     data={user.pets}
                     userName={user.firstName}
                  />
               </PassportWrapper>

               <PassportWrapper separator={true} separatorText="Your Friends">
                  <Thumbnails
                     isAFriend={false}
                     isForPets={false}
                     data={user.friends}
                     className="desktopPets"
                  />
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
      const docRefPet = doc(firestoreDB, "pets", userUID);
      const docSnap = await getDoc(docRef);
      const docSnapPet = await getDoc(docRefPet);
      const _data = docSnap.data();
      const _dataPet = docSnapPet.data();

      //Fetch user info

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

      if (_data?.DOB) {
         const data = {
            ..._data,
            // DOB: JSON.stringify(_data?.DOB.toDate()),
            ..._dataPet,
            friends: [dummyData.peter, dummyData.jennifer],
         };

         return {
            props: {
               data,
               userUID,
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
