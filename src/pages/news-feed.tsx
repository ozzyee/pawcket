import type { NextApiRequest, NextPage } from "next";
import { Frame, MainLayout, Navbar } from "../functions/dynamic-imports";
import * as S from "../styles/news-feed.style";
import { NewsFeedPostCard } from "../components/news-feed-postcard/news-feed-postcard.component";
import React, { useEffect, useState } from "react";
import { AuthService } from "../lib/auth-service/auth.service";
import { firestoreDB } from "../lib/firebase/firebase.initialize";
import { doc, getDoc } from "firebase/firestore";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { nullLiteralTypeAnnotation } from "@babel/types";

type TFeed = {
   comments: {
      comment: string;
      userID: string;
   }[];
   likes: {
      userID: string;
   }[];
   post: string;
   userID: string;
};

const NewsFeed: NextPage = () => {
   //This needs to be changed, possibly?

   const [feed, setFeed] = useState([]);
   const [users, setUsers] = useState();

   useEffect(() => {
      const qFeed = query(collection(firestoreDB, "feed"));
      const _feed: any = [];
      onSnapshot(qFeed, (querySnapshot) => {
         querySnapshot.forEach((doc) => {
            _feed.push(doc.data());
         });
         setFeed([..._feed]);
      });
   }, []);

   const getUser = async (userID: string) => {
      const docRef = doc(firestoreDB, "users", userID);
      const docSnap = await getDoc(docRef);
      const _data = docSnap.data();
      if (!_data) return null;
      const userData = {
         fullName: _data.firstName + " " + _data.lastName,
         userImage: _data.userImage,
      };
      return userData;
   };

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
                     img={"/circle/feed-icon-nav.svg"}
                     diameter={250}
                  />
               }
            >
               <S.CardList>
                  {feed.map(async ({ userID, post, likes, comments }) => {
                     const data = await getUser(userID);
                     console.log(data);
                     return (
                        <li>
                           <NewsFeedPostCard
                              postText="I own two dogs, yay!I own two dogs, yay!I own two dogs, yay!I own two dogs, yay!I own two dogs, yay!I own two dogs, yay!I own two dogs, yay!I own two dogs, yay!I own two dogs, yay! I own two dogs, yay!I own two dogs, yay!I own two dogs, yay!I own two dogs, yay!I own two dogs, yay!I own two dogs, yay!I own two dogs, yay!I own two dogs, yay!I own two dogs, yay!  "
                              postImage={"item.url"}
                           />
                        </li>
                     );
                  })}
               </S.CardList>

               <Navbar className="nav" />
            </MainLayout>
         </S.Mobile>
      </>
   );
};

export default NewsFeed;
