import type { NextApiRequest, NextPage } from "next";
import { Separator } from "../components/separator/separator.component";
import { Frame, MainLayout, Navbar } from "../functions/dynamic-imports";
import * as S from "../styles/news-feed.style"
import {NewsFeedPostCard} from "../components/news-feed-postcard/news-feed-postcard.component"
import React, {useState} from "react";
import { freddie } from "../../dummy-data/dummy-data";


const NewsFeed : NextPage = () =>{
    //This needs to be changed, possibly?
    type TFeed = any[];

    const [feed, setFeed] = useState<TFeed>([]);

    function makeAFeed(){
    const item = {name : "hello"}
      setFeed([...feed, item])
      console.log(feed)
    }


return (<>
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
<MainLayout className="mobile"
               bottomTitle="News Feed"
               topChildren={
                  <Frame
                     background={"/frame.svg"}
                     img={"/circle/feed-icon-nav.svg"}
                     diameter={250}
                  />
               }>
                <S.CardList>
                   {feed.map((item)=>{
                       return <li><NewsFeedPostCard></NewsFeedPostCard>
                       </li>
                  })}
                </S.CardList>

                   <h1 onClick={makeAFeed}>Click me to add a feed!</h1>
<Navbar className="nav" />
</MainLayout>
</S.Mobile>
</>)
}

export default NewsFeed;
