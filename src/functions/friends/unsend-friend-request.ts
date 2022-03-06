import { doc, getDoc, setDoc } from "@firebase/firestore";
import { firestoreDB } from "../../lib/firebase/firebase.initialize";
import { TUserData } from "../../types/user-data.definition";

type TAddFriend = {
   id: string;
   userUID: string | undefined;
   currentUserData: TUserData;
};

export const unsendFriendRequest = async ({
   id,
   userUID,
   currentUserData,
}: TAddFriend) => {
   if (!userUID) return null;
   //! we make a copy of the array as this is what we are going to modify
   const removalArr = currentUserData.friends;

   //! then we get the index of the target id
   const index = removalArr?.findIndex(({ friendID }: { friendID: string }) => {
      return friendID === id;
   });
   //! then if there is an object in the array with the target if we remove it
   if (index !== -1) removalArr?.splice(index, 1);

   //! we then make a new object to sed to the db
   const removeFriendData = {
      ...currentUserData,
      friends: [...removalArr],
   };
   //! when the object is ready then send it to the db
   await setDoc(doc(firestoreDB, "users", userUID), removeFriendData);
   removeFriendRequest({ id, userUID });
};

const removeFriendRequest = async ({
   id,
   userUID,
}: {
   id: string;
   userUID: string;
}) => {
   if (!id) return null;
   //! get the selected friends data have
   const docRef = doc(firestoreDB, "users", id);
   const docSnap = await getDoc(docRef);
   const _data = docSnap.data();
   const removalFriendArr = _data?.friendsRequests;
   const newArr: any = [];

   //! we remove the user from are friend requests
   removalFriendArr?.map((item: any) => {
      if (item.friendID !== userUID) {
         newArr.push(item);
      }
   });

   //! we then make a new object to sed to the db
   const removeFriendData = {
      ..._data,
      friendsRequests: [...newArr],
   };
   await setDoc(doc(firestoreDB, "users", id), removeFriendData);
};
