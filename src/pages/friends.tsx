import type { NextPage } from "next";

import { Navbar } from "../components/navbar/navbar.component";
import { Frame, MainLayout } from "../functions/dynamic-imports";
import * as S from "../styles/vets.style";


const Friends: NextPage = () => {
   return (
      <>
         <S.Desktop>
            <MainLayout className="desktop" desktopCard={true}>
                
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

// export async function getServerSideProps({ req }: { req: NextApiRequest }) {
//    try {
//       const cookieRefreshToken = req.cookies.token;
//       const authService = new AuthService();
//       const dataRes = await authService.getFirebaseUserToken(
//          cookieRefreshToken
//       );
//       const userUID = dataRes.getIdToken.user_id;
//       const docRef = doc(firestoreDB, "pets", userUID);
//       const docSnap = await getDoc(docRef);
//       // eslint-disable-next-line no-unused-vars
//       const _data = docSnap.data();

//       // No user then send to login/ sign up page
//       if (!dataRes) {
//          return {
//             redirect: {
//                destination: "/",
//             },
//          };
//       }

//       return {
//          props: {
//             userUID,
//          },
//       };
//    } catch (err) {
//       console.log("ERR", err);

//       return {
//          redirect: {
//             destination: "/",
//          },
//       };
//    }
// }

export default Friends;
