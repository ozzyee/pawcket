import type { NextPage } from "next";
import { Frame, MainLayout, Navbar } from "../functions/dynamic-imports";
import * as S from "../styles/news-feed.style";
import { NewsFeedPostCard } from "../components/news-feed-postcard/news-feed-postcard.component";
import React, { useEffect, useState } from "react";
import { firestoreDB } from "../lib/firebase/firebase.initialize";
import { collection, query, onSnapshot } from "firebase/firestore";
import { getPost } from "../functions/get-feed";
import { TFeed, TFeedData } from "../types/feed-definition";

const NewsFeed: NextPage = () => {
   const [feed, setFeed] = useState<TFeed[]>([]);
   const [feedData, setFeedData] = useState<TFeedData[]>([]);

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

   // const[feedData, setFeedData]= useState([]);

   useEffect(() => {
      const getFeedData = async () => {
         const _data: any = await getPost({ feed });
         setFeedData(_data);
      };
      getFeedData();
      console.log(feedData);
   }, [feed]);

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
                  {feedData.map(({ user, post, likes, comments }, index) => {
                     console.log("FEEDDATA>>>>>>>>", user.userImage);
                     return (
                        <li key={index}>
                           <NewsFeedPostCard
                              postText={post}
                              postImage={user.userImage}
                              userName={user.fullName}
                              postLike={likes}
                              postComment={comments}
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
