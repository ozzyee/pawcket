import type { NextApiRequest, NextPage } from "next";
import {
   Buttons,
   Frame,
   MainLayout,
   Navbar,
} from "../functions/dynamic-imports";
import * as S from "../styles/news-feed.style";
import { NewsFeedPostCard } from "../components/news-feed-postcard/news-feed-postcard.component";
import React, { useEffect, useState } from "react";
import { firestoreDB } from "../lib/firebase/firebase.initialize";
import {
   collection,
   query,
   onSnapshot,
   addDoc,
   doc,
   getDoc,
} from "firebase/firestore";
import { getPost } from "../functions/get-feed";
import { TFeed, TFeedData } from "../types/feed-definition";
import { FormInputs } from "../components/form-inputs/form-inputs.component";
import { NewPost } from "../components/news-feed-postcard/_partials/new-post/new-post.component";
import { AuthService } from "../lib/auth-service/auth.service";
type props = {
   userUID: string;
};
const NewsFeed = ({ userUID }: props) => {
   const [feedData, setFeedData] = useState<TFeedData[]>([]);

   useEffect(() => {
      const qFeed = query(collection(firestoreDB, "feed"));
      onSnapshot(qFeed, (querySnapshot) => {
         const _feed: any = [];
         const getFeedData = async () => {
            querySnapshot.forEach((doc) => {
               _feed.push(doc.data());
            });
            const _data: any = await getPost({ feed: _feed });
            setFeedData(_data);
         };
         getFeedData();
      });
   }, []);

   return (
      <>
         {/* <S.Desktop>
<MainLayout className="desktop" desktopCard={true}>
    <S.Top>
    <S.TopRight>
    </S.TopRight>
    <S.TopLeft>
    <Navbar className="nav" />
        </ S.TopLeft>
    </S.Top>
    <S.Bottom>
    <Separator className="vetsep" />
    </S.Bottom>
    </MainLayout>
   </S.Desktop> */}
         {/* Start of the mobile version  */}
         <S.Mobile>
            <MainLayout
               className="mobile"
               bottomTitle="News Feed"
               topChildren={
                  <Frame
                     background={"/frame.svg"}
                     img={"/circle/feed-circle-white.svg"}
                     diameter={250}
                  />
               }
            >
               <S.CardList>
                  {feedData.map(({ user, post, likes, comments }, index) => {
                     console.log("FEEDDATA>>>>>>>>", feedData);
                     return (
                        <li key={index}>
                           <NewsFeedPostCard
                              postText={post}
                              postImage={user.userImage}
                              userName={user.fullName}
                              postLike={likes}
                              postComment={comments}
                              feedData={feedData}
                           />
                        </li>
                     );
                  })}
               </S.CardList>
               <NewPost userUID={userUID} />
               <div style={{ height: " 10vh" }}></div>
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

export default NewsFeed;
