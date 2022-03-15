import { setDoc, doc } from "firebase/firestore";
import { redirect } from "next/dist/server/api-utils";
import router from "next/router";
import { uid } from "uid";
import { firestoreDB } from "../lib/firebase/firebase.initialize";


function PostComment(comment, ID){
    if (comment !== "") {
        try {
     
              await setDoc(doc(firestoreDB, "feed", ID), {
                 comments: [
                    {
                       ...formData,
                    
                       id: uid(),
                      
                    },
                 ],
              });
              if (redirect !== "user-profile") {
                 // @ts-ignore
                 Router.reload(window.location.pathname);
              } else {
                 router.push(redirect);
              }
        //    else {
        //       await setDoc(doc(firestoreDB, "pets", userUID), {
        //          pets: [
        //             ..._data?.pets,
        //             {
        //                ...formData,
        //                dateOfBirth: DOB,
        //                id: uid(),
        //                image: uploadImage || img,
        //             },
        //          ],
        //       });

}