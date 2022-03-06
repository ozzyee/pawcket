import { setDoc, doc, getDoc } from "@firebase/firestore";
import { firestoreDB } from "../../lib/firebase/firebase.initialize";
import { TAddFriend, TUserData } from "../../types/user-data.definition";


export const addFriend = ({ id, userUID, currentUserData }: TAddFriend) => {
   if (!userUID) return null;
   confirmRequest({ id, userUID, currentUserData });
   setFriend({ id, userUID });
};

const confirmRequest = async ({
   id,
   userUID,
   currentUserData,
}: {
   id: string;
   userUID: string;
   currentUserData: TUserData;
}) => {
   if (!userUID) return;
   const friends = currentUserData.friends;
   const removeItem = currentUserData.friendsRequests;

   const index = removeItem?.findIndex(({ friendID }: { friendID: string }) => {
      return friendID === id;
   });

   if (index !== -1) removeItem?.splice(index, 1);

   if (!friends) {
      const newData = {
         ...currentUserData,
         friends: ["", { friendID: id, requestAccepted: true }],
      };

      await setDoc(doc(firestoreDB, "users", userUID), newData);
      return;
   }
   const newData = {
      ...currentUserData,
      friends: [...friends, { friendID: id, requestAccepted: true }],
   };

   await setDoc(doc(firestoreDB, "users", userUID), newData);
};

const setFriend = async ({ id, userUID }: { id: string; userUID: string }) => {
   const docRef = doc(firestoreDB, "users", id);
   const docSnap = await getDoc(docRef);
   const _data = docSnap.data();
   const friendArr = _data?.friends;

   const objIndex = friendArr?.findIndex(
      ({ friendID }: { friendID: string }) => friendID === userUID
   );

   if (objIndex !== -1) friendArr?.splice(objIndex, 1);

   console.log("friend ->", _data?.friends);

   const data = {
      ..._data,
      friends: [...friendArr, { friendID: userUID, requestAccepted: true }],
   };

   await setDoc(doc(firestoreDB, "users", id), data);
};
