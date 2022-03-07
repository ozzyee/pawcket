import type { NextApiRequest, NextPage } from "next";
import { Separator } from "../components/separator/separator.component";
import { Frame, MainLayout, Navbar } from "../functions/dynamic-imports";
import * as S from "../styles/news-feed.style";
import { NewsFeedPostCard } from "../components/news-feed-postcard/news-feed-postcard.component";
import React, { useEffect, useState } from "react";
import { freddie } from "../../dummy-data/dummy-data";

const NewsFeed: NextPage = () => {
   //This needs to be changed, possibly?
   type TFeed = any[];

   const [feed, setFeed] = useState<TFeed>([1, 2, 4, 5]);

   async function catsAPI() {
      const apikey = "a0bc1dd9-0d9f-49b0-80c8-05e791dd8634";
      const response = await fetch(
         `https://api.thecatapi.com/v1/images/search?api_key=${apikey}`
      );
      const data = await response.json();
      console.log(data[0].id);
      return data[0].id;
   }

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
                  {feed.map((item) => {
                     return (
                        <li>
                           <NewsFeedPostCard
                              userName="reece"
                              postText="I own two dogs, yay!I own two dogs, yay!I own two dogs, yay!I own two dogs, yay!I own two dogs, yay!I own two dogs, yay!I own two dogs, yay!I own two dogs, yay!I own two dogs, yay! I own two dogs, yay!I own two dogs, yay!I own two dogs, yay!I own two dogs, yay!I own two dogs, yay!I own two dogs, yay!I own two dogs, yay!I own two dogs, yay!I own two dogs, yay!  "
                              postImage={item.url}
                           ></NewsFeedPostCard>
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
