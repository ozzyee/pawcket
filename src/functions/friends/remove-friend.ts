import { setDoc, doc, getDoc } from "@firebase/firestore";
import { firestoreDB } from "../../lib/firebase/firebase.initialize";
import { TAddFriend } from "../../types/user-data.definition";

export const removeFriend = (props: TAddFriend) => {
   removeFriendFromUser(props);
   removeFriendFromFriend(props);
};

const removeFriendFromUser = async ({
   id,
   userUID,
   currentUserData,
}: TAddFriend) => {
   if (!userUID) return null;

   const friendsList = currentUserData.friends;
   const indexOfFriend = friendsList?.findIndex(
      ({ friendID }: { friendID: string }) => {
         return friendID === id;
      }
   );

   if (indexOfFriend !== -1) friendsList?.splice(indexOfFriend, 1);

   const newData = {
      ...currentUserData,
      friends: friendsList,
   };

   console.log("firends ->", newData);
   await setDoc(doc(firestoreDB, "users", userUID), newData);
   //    removeFriendFromFriend({ id, userUID });
};

const removeFriendFromFriend = async ({
   id,
   userUID,
   // eslint-disable-next-line no-unused-vars
   currentUserData,
}: TAddFriend) => {
   if (!id) return null;
   //! get the selected friends data have
   const docRef = doc(firestoreDB, "users", id);
   const docSnap = await getDoc(docRef);
   const _data = docSnap.data();
   const _friendsList = _data?.friends;

   const indexOfFriend = _friendsList?.findIndex(
      ({ friendID }: { friendID: string }) => {
         return friendID === userUID;
      }
   );
   if (indexOfFriend !== -1) _friendsList?.splice(indexOfFriend, 1);

   const _newData = {
      ..._data,
      friends: _friendsList,
   };
   console.log("data ->", _newData);
   await setDoc(doc(firestoreDB, "users", id), _newData);
};
