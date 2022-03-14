import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { Buttons } from "../../../../functions/dynamic-imports";
import { firestoreDB } from "../../../../lib/firebase/firebase.initialize";
import { FormInputs } from "../../../form-inputs/form-inputs.component";

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

   async function createPost(e: React.ChangeEvent<HTMLInputElement>) {
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
   }

   function handleChange(e: any) {
      e.preventDefault();
      setPost(e.target.value);
   }

   return (
      <>
         <FormInputs placeholder="post a comment" onChange={handleChange} />
         <Buttons onClick={createPost}> Post Comment </Buttons>
      </>
   );
}
