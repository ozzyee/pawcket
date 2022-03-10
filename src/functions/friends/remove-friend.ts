import { setDoc, doc, getDoc } from "@firebase/firestore";
import { firestoreDB } from "../../lib/firebase/firebase.initialize";
import { TAddFriend } from "../../types/user-data.definition";

export const removeFriend = (props: TAddFriend) => {
   removeFriendFromFriend(props);
   removeFriendFromUser(props);
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

   await setDoc(doc(firestoreDB, "users", id), _newData);
};

const removeFriendFromUser = async ({
   id,
   userUID,
   currentUserData,
}: TAddFriend) => {
   if (!userUID) return null;
   const crrUserFriendsReq = currentUserData.friendsRequests;
   const crrUserFriends = currentUserData.friends;

   const indexOfFriendReq = crrUserFriendsReq?.findIndex(
      ({ friendID }: { friendID: string }) => {
         return friendID === id;
      }
   );
   if (indexOfFriendReq !== -1) crrUserFriendsReq?.splice(indexOfFriendReq, 1);

   const indexOfFriend = crrUserFriends?.findIndex(
      ({ friendID }: { friendID: string }) => {
         return friendID === id;
      }
   );
   if (indexOfFriend !== -1) crrUserFriends?.splice(indexOfFriend, 1);

   const newData = {
      ...currentUserData,
      friendsRequests: crrUserFriendsReq,
      friends: crrUserFriends,
   };

   await setDoc(doc(firestoreDB, "users", userUID), newData);
};
