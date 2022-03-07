/* eslint-disable no-unused-vars */
import { NextApiRequest, NextPage} from "next";
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

const UserProfile: NextPage = ({userUID, data}) => {
   const [user, setUser] = useState<TUser | DocumentData>({...data, friends: Array(8).fill(dummyData.jennifer,0)});
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
                  <Frame
                     background="/frame.svg"
                     img={
                        !user.profilePic || user.profilePic === ""
                           ? "/circle/user-circle-white.svg"
                           : user.profilePic
                     }
                     diameter={200}
                  />
                  <Text textType="h1" className="name">
                     {user.firstName}
                  </Text>
               </S.TopLeft>
               <S.TopRight>
                  <Navbar className="desktopNav"/>
                    <S.InfoSection className="desktopinfo">
                        <UserInfo user={user}/>
                    </S.InfoSection>
               </S.TopRight>
               <S.BottomLeft >
                  <Separator
                     separatorText="Your Pets"
                     className="separator"
                  />
                  <PassportWrapper
                     separator={false}
                     className="desktopPassport"
                  >
                     <S.PetsSection className="desktopPets">
                        {user.pets &&
                           user.pets.map((pet: TPet, id: number) => {
                              return (
                                 <RoundImage
                                    src={pet.profilePic}
                                    diameter={120}
                                    caption={pet.name}
                                    className="petPic"
                                    isPet={true}
                                    onClick={() =>
                                       router.push(`/pet-profile/${pet.id}`, undefined, {
                                          shallow: true,
                                       })
                                    }
                                    key={id}
                                 />
                              );
                           })}
                        <Buttons
                           dark={false}
                           className={!user.pets ? "centeredButton": ""}
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
               </S.BottomLeft>
               <S.BottomRight>
                  <Separator
                     separatorText="Your Friends"
                     className="separator"
                  />
                    <PassportWrapper separator={true} separatorText="Your Friends" className="desktopPassport">
                       <S.FriendsSection className="desktopPets">
                          {user.friends &&
                             user.friends.map((friend: TUser, index:number) => {
                                return (
                                   <RoundImage
                                      key={index}
                                      src={friend.profilePic}
                                      diameter={120}
                                      caption={friend.userName}
                                      isPet={false}
                                      className="petPic"
                                      onClick={() =>
                                         router.push(`/user-profile/${friend.id}`, undefined, {
                                            shallow: true,
                                         })
                                      }
                                   />
                                );
                             })}
                          <Buttons
                            dark={false}
                            onClick={() =>
                               router.push("/create-pet", undefined, {
                                  shallow: true,
                               })
                            }
                         >
                            +
                         </Buttons>
                  </S.FriendsSection>
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
                        !user.profilePic || user.profilePic === ""
                           ? "/circle/user-circle-white.svg"
                           : user.profilePic
                     }
                     diameter={230}
                  />
               }
               className="mobile"
            >
               <S.InfoSection>
                   <UserInfo user={user}/>
               </S.InfoSection>
               <PassportWrapper separator={true} separatorText="Your Pets">
                  <S.PetsSection>
                     {user.pets &&
                        user.pets.map((pet: TPet, index:number) => {
                           return (
                              <RoundImage
                                 key={index}
                                 src={pet.image}
                                 diameter={100}
                                 caption={pet.name}
                                 isPet={true}
                                 onClick={() =>
                                    router.push(`/pet-profile/${pet.id}`, undefined, {
                                       shallow: true,
                                    })
                                 }
                              />
                           );
                        })}
                     <Buttons
                        dark={false}
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
               
               <PassportWrapper separator={true} separatorText="Your Friends">
                  <S.FriendsSection>
                     {user.friends &&
                        user.friends.map((friend: TUser, index:number) => {
                           return (
                              <RoundImage
                                 key={index}
                                 src={friend.profilePic}
                                 diameter={100}
                                 caption={friend.userName}
                                 isPet={false}
                                 onClick={() =>
                                    router.push(`/user-profile/${friend.id}`, undefined, {
                                       shallow: true,
                                    })
                                 }
                              />
                           );
                        })}
                     <Buttons
                        dark={false}
                        onClick={() =>
                           router.push("/create-pet", undefined, {
                              shallow: true,
                           })
                        }
                     >
                        +
                     </Buttons>
                  </S.FriendsSection>
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
           DOB: JSON.stringify(_data?.DOB.toDate()),
           ..._dataPet,
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
            data
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
