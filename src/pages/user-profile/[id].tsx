/* eslint-disable no-unused-vars */
import { NextApiRequest } from "next";
import { useRouter } from "next/router";
import { EffectCallback, useEffect, useState } from "react";
import { Separator } from "../../components/separator/separator.component";
import { PassportWrapper } from "../../components/passport-wrapper/passport-wrapper.component";
import { Text } from "../../components/text/text.component";
import { UserInfo } from "../../components/user-info/user-info.component";
import * as dummyData from "../../../dummy-data/dummy-data";
import * as S from "../../styles/user-profile";
import { AuthService } from "../../lib/auth-service/auth.service";
import { doc, DocumentData, getDoc } from "@firebase/firestore";
import { firestoreDB } from "../../lib/firebase/firebase.initialize";
import { Frame, MainLayout, Navbar } from "../../functions/dynamic-imports";
import Head from "next/head";
import { TPet } from "../../layouts/creat-pet-form/creat-pet-form.definition";
import { TUser } from "../../../dummy-data/dummy-data";
import { Thumbnails } from "../../components/thumbnails/thumbnails.component";

type TUserData = {
   firstName: string;
   lastName: string;
   userName?: string;
   address?: string;
   DOB: string;
   telephone?: string;
   extraInfo?: string;
   userImage?: string;
   postCode?: string;
   pets?: TPet[];
   friends: TFriendData[];
   id?: string;
};
type TFriendData = {
    requestAccepted:boolean;
    friendID: string;
};

type TData = {
   data: TUserData;
};

const FriendProfile = ({ data }: TData) => {
    const router = useRouter();
    const userID = router.asPath.split("/")[2];

   const [user, setUser] = useState<TUser | DocumentData>();
   const [friends, setFriends] = useState<any[]>([""])
   const [trigger, setTrigger] = useState<boolean>(false)

    useEffect(() => {

        const setFriendData = async() => {            
        const docRef = doc(firestoreDB, "users", userID);
        const docSnap = await getDoc(docRef);
        const _data = docSnap.data();
        setUser({..._data});
        setTrigger(true)
        };
        setFriendData();

    }, [])
    useEffect(() => {

        const setFriendsID = async() =>{
            
            if(!trigger){
                return null
            }
            const getFriendsIDS = () =>{
                if(!user){return null}
                const acceptedRequest = user.friends.filter((friend: TFriendData) => { return friend.requestAccepted ? true : false})
                const IDS: string[] = [];
                acceptedRequest.forEach((id: TFriendData) => IDS.push(id.friendID))
                return IDS 
            }
            const friendsID = getFriendsIDS()
            const friendsData: TUser[] | DocumentData[] = [];
            async function getFriendsData(id:string) {       
                const docRef = doc(firestoreDB, "users", id);
                const docSnap = await getDoc(docRef);
                const data = docSnap.data();
                data ? friendsData.push(data): null
                setFriends([...friendsData])
            }
            friendsID ? friendsID.map(async(id:string) => {await getFriendsData(id)}) : null
        }
        setFriendsID();

    }, [trigger])

if (!user) return null;
   return (
      <>
         <Head>
            <title>Pawcket | {`${user.firstName}'s Dashboard`}</title>
            <html lang="en" />
         </Head>

         <S.Desktop>
            <MainLayout desktopCard={true} className="desktop">
               <S.TopLeft>
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
                  <Separator
                     separatorText={`${user.firstName}'s Pets`}
                     className="separator"
                  />
                  <PassportWrapper
                     separator={false}
                     className="desktopPassport"
                  >
                     <Thumbnails
                        userName={user.firstName}
                        isForPets={true}
                        isAFriend={true}
                        data={user.pets}
                        className="desktopPets"
                     />
                  </PassportWrapper>
               </S.BottomLeft>
               <S.BottomRight>
                  <Separator
                     separatorText={`${user.firstName}'s Friends`}
                     className="separator"
                  />
                  <PassportWrapper
                     separator={true}
                     separatorText="Your Friends"
                     className="desktopPassport"
                  >
                     <Thumbnails
                        userName={user.firstName}
                        isForPets={false}
                        isAFriend={true}
                        data={friends}
                        className="desktopPets"
                     />
                  </PassportWrapper>
               </S.BottomRight>
            </MainLayout>
         </S.Desktop>

         <S.Mobile>
            <MainLayout
               bottomTitle={user.userName ? user.userName : user.firstName}
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
               <PassportWrapper
                  separator={true}
                  separatorText={`${user.firstName}'s Pets`}
               >
                  <Thumbnails
                     userName={user.firstName}
                     isForPets={true}
                     isAFriend={true}
                     data={user.pets}
                  />
               </PassportWrapper>

               <PassportWrapper
                  separator={true}
                  separatorText={`${user.firstName}'s Friends`}
               >
                  <Thumbnails
                     userName={user.firstName}
                     isForPets={false}
                     isAFriend={true}
                     data={friends}
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
            ..._dataPet,
         };

         return {
            props: {
               data,
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

export default FriendProfile;
