import { setDoc, doc, getDoc } from "@firebase/firestore";
import { firestoreDB } from "../../lib/firebase/firebase.initialize";
import { TUserData } from "../../types/user-data.definition";

type TAddFriend = {
   id: string;
   userUID: string | undefined;
   currentUserData: TUserData;
};

export const sendFriendRequest = async ({
   id,
   userUID,
   currentUserData,
}: TAddFriend) => {
   if (!userUID) return null;

   //! if the current used doesn't have any friends then add an empty sting to array  and put in selected friend
   if (!currentUserData.friends) {
      const addFriendData = {
         ...currentUserData,
         friends: ["", { friendID: id, requestAccepted: false }],
      };
      await setDoc(doc(firestoreDB, "users", userUID), addFriendData);
      sendRequestToFriend({ id, userUID });
      return;
   }
   //! if the current used has friends spread out the friends and put in the new one

   const addFriendData = {
      ...currentUserData,
      friends: [
         ...currentUserData.friends,
         { friendID: id, requestAccepted: false },
      ],
   };
   //! when the object is ready then send it to the db
   await setDoc(doc(firestoreDB, "users", userUID), addFriendData);
   sendRequestToFriend({ id, userUID });
};

const sendRequestToFriend = async ({
   id,
   userUID,
}: {
   id: string;
   userUID: string;
}) => {
   //! get the selected friends data have
   const docRef = doc(firestoreDB, "users", id);
   const docSnap = await getDoc(docRef);
   const _data = docSnap.data();

   //! once we have the data we can then send it to the db.
   //! if the friend doesn't have any friends then we will set an empty array with a string an new data
   if (!_data?.friendsRequests) {
      const addFriendRequestData = {
         ..._data,
         friendsRequests: ["", { requestAccepted: false, friendID: userUID }],
      };
      await setDoc(doc(firestoreDB, "users", id), addFriendRequestData);
      return;
   }

   //! if  the friend has friends then speed out the data and add the new one
   const addFriendRequestData = {
      ..._data,
      friendsRequests: [
         ..._data.friendsRequests,
         { requestAccepted: false, friendID: userUID },
      ],
   };
   await setDoc(doc(firestoreDB, "users", id), addFriendRequestData);
};
