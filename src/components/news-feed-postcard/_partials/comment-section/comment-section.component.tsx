import React, { useState } from "react";
import { TCommentSection } from "./comment-section.definition";
import { FormInputs } from "../../../form-inputs/form-inputs.component";

function CommentSection({}: TCommentSection){

    const [commentList, setCommentList] = useState([]);
    const [commentContent, setCommentContent] = useState("");

    function handleCommentSubmit(e : any){
        e.preventDefault();
        if(commentContent === ""){
            return;
        }
        //@ts-ignore
        setCommentList([...commentList, {
        //@ts-ignore
            userName : "USerBaidjsiodj",
        //@ts-ignore
        comment : commentContent
        }])
        console.log(commentList)
        setCommentContent("");
    }

     function handleChange(e : any){
        setCommentContent(e.target.value);
     }

return (<div>
    <form onSubmit={handleCommentSubmit}>
    <FormInputs placeholder="Write a comment here!" onChange={handleChange}/><button>Submit</button>
    </form>
    <ul>
        {commentList.map((comment)=>{
        //@ts-ignore
            return <li><h1>{comment.userName}{comment.comment}</h1></li>
        })}
    </ul>
</div>)
}

export default CommentSection;