import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { Buttons } from "../../../../functions/dynamic-imports";
import { firestoreDB } from "../../../../lib/firebase/firebase.initialize";
import { FormInputs } from "../../../form-inputs/form-inputs.component";
import * as S from "./new-post.style";

type Tpost = {
   userID: string;
   post: string;
   comments: any[];
   likes: any[];
};

export function NewPost({ userUID }: { userUID: string }) {
   const initialState: Tpost = {
      userID: "",
      post: "",
      comments: [{ comments: "", userID: "" }],
      likes: [{ userID: "" }],
   };
   const [postInfo, setPostInfo] = useState<Tpost>(initialState);
   const [post, setPost] = useState("");
   const [showInput, setShowInput] = useState(false);
   const [text, setText] = useState("");

   async function createPost(e: React.MouseEvent<HTMLElement>) {
      if (!showInput) {
         setShowInput(true);
         return;
      }
      if (!text) {
         setShowInput(false);
         return;
      }
      e.preventDefault();
      try {
         await addDoc(collection(firestoreDB, "feed"), {
            userID: userUID,
            post: post,
            comments: [],
            likes: [],
         });
      } catch (err) {
         alert(err);
      }
      setText("");
      setShowInput(false);
   }

   function handleChange(e: any) {
      e.preventDefault();
      setText(e.target.value);
      setPost(text);
   }

   function remove() {}

   return (
      <>
         <S.test visible={showInput ? true : false}>
            {showInput ? (
               <FormInputs
                  placeholder="post a comment"
                  onChange={handleChange}
                  formValue={text}
                  className="postbackground"
               />
            ) : null}
            <S.postButton
               onClick={(e: React.MouseEvent<HTMLElement>) => {
                  createPost(e);
               }}
            >
               📝
            </S.postButton>
         </S.test>
      </>
   );
}
