/* eslint-disable no-unused-vars */
import { setDoc, doc } from "@firebase/firestore";
import router from "next/router";
import { firestoreDB } from "../../lib/firebase/firebase.initialize";

type TNewData = {
   DOB: string;
   email: string;
   firstName: string;
   //    friends: {
   //            requestAccepted: boolean;
   //            friendID: string;
   //         }[]
   //       | string[];
   friends: any[];
   friendsRequests:
      | {
           requestAccepted: boolean;
           friendID: string;
        }[]
      | string[];
   lastName: string;
   userID: string;
   userImage: string;
};

export const sendMessageDataToUser = async (newData: any, userUID: string) => {
   if (!userUID) return null;
   await setDoc(doc(firestoreDB, "users", userUID), {
      ...newData,
   });
};

export const sendMessageDataToFriend = async (
   newData: any,
   userID: string,
   messageID: string,
   userUID: string
) => {
   await setDoc(doc(firestoreDB, "users", userID), {
      ...newData,
   });

   console.log("newData =>", newData);

   await setDoc(doc(firestoreDB, "massages", messageID), {
      users: [
         { userId: userUID, isResponding: false },
         { userId: userID, isResponding: false },
      ],
      messages: [""],
   });

   router.push("/messaging/" + messageID);
};
