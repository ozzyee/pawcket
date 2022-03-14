import React, { useState } from "react";
import { TCommentSection } from "./comment-section.definition";
import { FormInputs } from "../../../form-inputs/form-inputs.component";
import * as S from "./comment-section.style";
import { getUser } from "../../../../functions/get-feed";

function CommentSection({ userName }: TCommentSection) {
   const [commentList, setCommentList] = useState([]);
   const [commentContent, setCommentContent] = useState("");

   function handleCommentSubmit(e: any) {
      e.preventDefault();
      if (commentContent === "") {
         return;
      }
      //@ts-ignore
      setCommentList([
         ...commentList,
         {
            //@ts-ignore
            userName: userName,
            //@ts-ignore
            comment: commentContent,
         },
      ]);
      console.log(commentList);
      setCommentContent("");
   }

   function handleChange(e: any) {
      setCommentContent(e.target.value);
   }

   const convertName = async () => {
      console.log(await getUser(userName));
      return await getUser(userName);
   };

   return (
      <div>
         <form onSubmit={handleCommentSubmit}>
            <FormInputs
               placeholder="Write a comment here!"
               onChange={handleChange}
            />
            <button>Submit</button>
         </form>
         <S.List>
            {commentList.map((comment) => {
               //@ts-ignore
               return (
                  <S.ListItem>
                     <S.TextHolder>
                        {convertName}
                        {comment.comment}
                     </S.TextHolder>
                  </S.ListItem>
               );
            })}
         </S.List>
         <h1 onClick={convertName.fullName}>Click me!</h1>
      </div>
   );
}

export default CommentSection;
