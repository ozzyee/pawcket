import React, { useState } from "react";
import { TCommentSection } from "./comment-section.definition";
import { FormInputs } from "../../../form-inputs/form-inputs.component";
import * as S from "./comment-section.style";
import {
   collection,
   query,
   onSnapshot,
   updateDoc,
   doc,
   getDoc,
} from "firebase/firestore";
import { firestoreDB } from "../../../../lib/firebase/firebase.initialize";

function CommentSection({ feedData }: TCommentSection) {
   const [commentList, setCommentList] = useState([
      {
         userID: "eK3NDSxrLaaDa3v3ONXnj4SFAZN2",
         contents: "SDIAsodijsaiodjsa",
      },
      {
         userID: "eK3NDSxrLaaDa3v3ONXnj4SFAZN2",
         contents: "SDIAsodiasdsadsadsajsaiodjsa",
      },
   ]);
   const [commentContent, setCommentContent] = useState("");

   function handleCommentSubmit(e: any) {
      e.preventDefault();
      if (commentContent === "") {
         return;
      }
      setCommentContent("");
   }

   async function testpost(e: any) {
      e.preventDefault();
      const taskDocRef = doc(firestoreDB, "feed", "hE5HPlTcNjEwveRQFrh2");
      try {
         await updateDoc(taskDocRef, {
            comments: [
               ...commentList,
               {
                  userID: "Someoneelse",
                  contents: "Hello I am a comment x",
               },
            ],
         });
      } catch {
         throw new Error("Hello");
      }
   }

   // const slurp = async (e) => {
   //  e.preventDefault()
   //  try {
   //    await getDoc(collection(firestoreDB, 'feed'), {
   //    })
   //  } catch (err) {
   //    alert(err)
   //  }

   function handleChange(e: any) {
      setCommentContent(e.target.value);
   }

   return (
      <div>
         <form onSubmit={handleCommentSubmit}>
            <FormInputs
               placeholder="Write a comment here!"
               onChange={handleChange}
            />
            <button>Submit</button>
         </form>
         <h1
            onClick={(e: any) => {
               testpost(e);
               console.log(commentList);
            }}
         >
            Clcik me for feeddata
         </h1>
         <S.List>
            {commentList.map((comment) => {
               //@ts-ignore
               return (
                  <S.ListItem>
                     <S.TextHolder>
                        {/* {comment.userName}
                        {comment.comment} */}
                     </S.TextHolder>
                  </S.ListItem>
               );
            })}
         </S.List>
      </div>
   );
}

export default CommentSection;
