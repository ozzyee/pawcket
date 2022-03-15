import { onSnapshot, doc } from "@firebase/firestore";
import router from "next/router";
import { firestoreDB } from "../../lib/firebase/firebase.initialize";
import {
   sendMessageDataToFriend,
   sendMessageDataToUser,
} from "./send-msg-data";

export const handleSelectedFriend = async (
   id: string,
   userUID: string | undefined
) => {
   const userID = id.split("/")[1];
   const messageID = id.split("/")[0];

   if (!userUID) return;
   onSnapshot(doc(firestoreDB, "users", userID), async (doc) => {
      const data = doc.data();
      const result = data?.friends.filter(
         ({ friendID }: { friendID: string }) => friendID === userUID
      );

      if (!result[0].chatID) {
         const friend = data?.friends;
         const objIndex = friend?.findIndex(
            ({ friendID }: { friendID: string }) => friendID === userUID
         );
         friend[objIndex] = {
            friendID: userUID,
            requestAccepted: true,
            chatID: messageID,
         };

         const newData = {
            ...data,
            friends: friend,
         };
         await sendMessageDataToFriend(newData, userID, messageID, userUID);
      }

      if (result[0].chatID) {
           router.push("/messaging/" + result[0].chatID);
      }
   });

   // set message id to current user
   onSnapshot(doc(firestoreDB, "users", userUID), async (doc) => {
      const data = doc.data();
      const result = data?.friends.filter(
         ({ friendID }: { friendID: string }) => friendID === userID
      );

      if (!result[0].chatID) {
         const friend = data?.friends;
         const objIndex = friend?.findIndex(
            ({ friendID }: { friendID: string }) => friendID === userID
         );
         friend[objIndex] = {
            friendID: userID,
            requestAccepted: true,
            chatID: messageID,
         };

         const newData = {
            ...data,
            friends: friend,
         };
         await sendMessageDataToUser(newData, userUID);
      }
   });
};
