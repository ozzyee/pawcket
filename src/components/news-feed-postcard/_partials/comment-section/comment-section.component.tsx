import React, { useState } from "react";
import { TCommentSection } from "./comment-section.definition";
import { FormInputs } from "../../../form-inputs/form-inputs.component";

function CommentSection({}: TCommentSection){

    const [commentList, setCommentList] = useState([]);
    const [commentContent, setCommentContent] = useState("");

    function handleCommentSubmit(e : any){
        e.preventDefault();
        setCommentList([...commentList, {
            userName : "Reece",
            comment : commentContent
        }])
        console.log(commentList)
        setCommentContent("");
    }

     function handleChange(e : any){
        setCommentContent(e.target.value);
        console.log(commentContent)
     }

return (<div>
    <form onSubmit={handleCommentSubmit}>
    <FormInputs placeholder="Write a comment here!" onChange={handleChange} value={""}/><button>Submit</button>
    </form>
    <ul>
        {commentList.map((comment)=>{
            return <li><h1>{comment.userName}{comment.comment}</h1></li>
        })}
    </ul>
</div>)
}

export default CommentSection;