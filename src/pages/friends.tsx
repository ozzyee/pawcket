/* eslint-disable eqeqeq */
import { collection, getDocs } from "@firebase/firestore";
import type { NextApiRequest } from "next";
import { useEffect, useState } from "react";
import { FormInputs } from "../components/form-inputs/form-inputs.component";

import { Navbar } from "../components/navbar/navbar.component";
import { Frame, MainLayout } from "../functions/dynamic-imports";
import { AuthService } from "../lib/auth-service/auth.service";
import { firestoreDB } from "../lib/firebase/firebase.initialize";
import * as S from "../styles/vets.style";

type TUserData = {
   DOB: string;
   address: string;
   email: string;
   extraInfo: string;
   firstName: string;
   lastName: string;
   postCode: string;
   tel: string;
   userID: string;
   userImage: string;
};

type TFriendsData = {
   data: TUserData[];
   userUID?: string;
};

const Friends = ({ data, userUID }: TFriendsData) => {
   const [search, setSearch] = useState("");
   const [searchArr, setSearchArr] = useState<string[]>([]);
   const newData: TUserData[] = [];

   useEffect(() => {
      const sarahArray = search.split(" ");
      setSearchArr([...sarahArray]);
   }, [search]);

   data.map((data: TUserData) => {
      if (searchArr.length === 1) {
         if (data?.firstName?.includes(searchArr[0])) {
            newData.push(data);
            return;
         }
      } else if (searchArr[1] === "") {
         if (data?.firstName == searchArr[0]) {
            console.log("HELLO!@#$%");

            newData.push(data);
            return;
         }
      } else if (searchArr.length > 1) {
         if (
            data?.firstName?.includes(searchArr[0]) &&
            data?.lastName?.includes(searchArr[1])
         ) {
            newData.push(data);
         }
      }
   });

   console.log(newData);

   return (
      <>
         <S.Desktop>
            <MainLayout className="desktop" desktopCard={true}>
               <FormInputs
                  placeholder={"Search for friends"}
                  onChange={(evt) => setSearch(evt.target.value)}
               />
            </MainLayout>
         </S.Desktop>

         <S.Mobile>
            <MainLayout
               className="mobile"
               bottomTitle="Vets near you"
               topChildren={
                  <Frame
                     background={"/frame.svg"}
                     img={"/circle/vet-circle.svg"}
                     diameter={230}
                  />
               }
            >
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
      const data: any = [];
      const querySnapshot = await getDocs(collection(firestoreDB, "users"));

      querySnapshot.forEach((doc) => {
         const _data = doc.data();
         console.log("DATA =>", _data);

         const dataObject = {
            ..._data,
            DOB: JSON.stringify(_data?.DOB?.toDate()) || "",
            lastName:
               _data.lastName?.charAt(0).toUpperCase() +
               _data.lastName?.slice(1),
            firstName:
               _data.firstName?.charAt(0).toUpperCase() +
               _data.firstName?.slice(1),
         };

         data.push(dataObject);
      });

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
            data,
         },
      };
   } catch (err) {
      console.log("ERR", err);

      return {
         //  redirect: {
         //     destination: "/",
         //  },
         props: {},
      };
   }
}

export default Friends;
