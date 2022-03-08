import React from "react";
import { TCardInfoProps } from "./news-feed-postcard.definition";
import * as S from "./news-feed-postcard.style";
import { Text } from "../text/text.component";
import VetIcon from "./vet-icon.svg";
import Image from "next/image";
import UserIcon from "./user-icon.svg";
import { InterationRibbon } from "./_partials/interaction-ribbon/interaction-ribbon.component";
import {useState} from "react";
import CommentSection from "./_partials/comment-section/comment-section.component";


export function NewsFeedPostCard({
   className,
   userName,
   postImage,
   postText,
}: TCardInfoProps) {

   const [likeCount, setLikeCount] = useState(0);
   const [isLiked, setIsLiked] = useState(false);
   const [showComment, setShowComment] = useState(false);

   function handleLikeClick(){
      if(isLiked){
      setLikeCount( likeCount - 1)
         return setIsLiked(false)
      }
      setLikeCount( likeCount + 1)
      return setIsLiked(true)
   }

   function handleCommentClick(){
      if(showComment){
        return  setShowComment(false)
      }
      return setShowComment(true)

   }


   return (
      <S.Wrapper>
         <S.CardLogoHolder>
            <UserIcon />
         </S.CardLogoHolder>
         <S.CardInfoDiv className={className}>
            <S.CardInfo>
               {/* <S.UserNameWrapper> */}
               <Text className="usernameText">{userName}</Text>
               {/* </S.UserNameWrapper> */}
               <S.TextHolder className="postText">
                  <Text>{postText}</Text>
               </S.TextHolder>
            </S.CardInfo>
            <InterationRibbon likeCount={likeCount} handleLikeClick={handleLikeClick} isLiked={isLiked} handleCommentClick={handleCommentClick}/>
         </S.CardInfoDiv>
         {showComment ? <CommentSection/> : null}
      </S.Wrapper>
   );
}