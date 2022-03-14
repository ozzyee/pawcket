/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { TMessage, TMessagingScreenProps } from "./messaging-screen.definition";
import * as S from "./messaging-screen.style";
import { firestoreDB } from "../../lib/firebase/firebase.initialize";
import { TUserData } from "../../types/user-data.definition";
import { MessageDetail } from "styled-icons/boxicons-regular";
import {
   collection,
   doc,
   DocumentData,
   getDoc,
   onSnapshot,
   query,
   setDoc,
   updateDoc,
} from "@firebase/firestore";
import { FriendsModal } from "../../components/friends-modal/friends-modal.component";
import { useRouter } from "next/router";
import { uid } from "uid";
import { Message } from "../../components/message/message.component";

export function MessagingScreen({
   className,
   type,
   userUID,
   selectedFriend,
}: TMessagingScreenProps) {
   const router = useRouter();
   const [allFriends, setAllFriends] = useState([]);
   const [friendsList, setFriendsList] = useState<TUserData[]>([]);
   const [msg, setMsg] = useState("");
   const [messages, setMessages] = useState<TMessage[] | null>(null);
   const [msgData, setMsgData] = useState({});
   const [respondingToMsg, setRespondingToMsg] = useState(false);
   const [currentUsersChats, setCurrentUsersChats] = useState([]);
   const [newData, setNewData] = useState([]);

   useEffect(() => {
      if (!userUID) return;
      onSnapshot(doc(firestoreDB, "users", userUID), (doc) => {
         const data = doc.data();
         const friends = data?.friends;
         setAllFriends(friends);
         setCurrentUsersChats(data?.chats);
      });
   }, []);

   useEffect(() => {
      const myFriends = allFriends?.filter(
         ({ requestAccepted }) => requestAccepted === true
      );

      const q = query(collection(firestoreDB, "users"));
      onSnapshot(q, (querySnapshot) => {
         const users: DocumentData = [];
         querySnapshot.forEach((doc) => {
            users.push(doc.data());
         });

         const _friendsList: TUserData[] = [];
         users.map((user: TUserData) => {
            myFriends?.map(({ friendID }) => {
               if (user?.userID === friendID) {
                  _friendsList.push(user);
               }
            });
         });
         setFriendsList(_friendsList);
      });
   }, [allFriends]);

   useEffect(() => {
      onSnapshot(doc(firestoreDB, "massages", "msg-id-123"), (doc) => {
         const data = doc.data();
         // @ts-ignore
         setMsgData(data);

         if (!data?.messages) return;
         setMessages([...data.messages]);
      });
   }, []);

   useEffect(() => {
      const objDiv: HTMLElement | null = document.getElementById("scroll");
      if (!objDiv) return;
      objDiv.scrollTop = objDiv.scrollHeight;
   }, [msgData]);

   // responding to msg
   useEffect(() => {
      if (msg) {
         setRespondingToMsg(true);
         const timeoutId = setTimeout(() => setRespondingToMsg(false), 2000);
         return () => clearTimeout(timeoutId);
      }
      if (!msg) setRespondingToMsg(false);
   }, [msg]);

   useEffect(() => {
      // @ts-ignore
      const _users = msgData.users;
      if (!_users) return;
      const objIndex = _users?.findIndex(
         (obj: { userId: string | undefined }) => obj.userId == userUID
      );

      _users[objIndex].isResponding = respondingToMsg;

      updateDoc(doc(firestoreDB, "massages", "msg-id-123"), {
         users: [..._users],
      });
   }, [respondingToMsg]);

   useEffect(() => {
      const getData = async () => {
         friendsList.map((items) => {
            items.chats?.map(async (item) => {
               const res = await Promise.all(
                  currentUsersChats.map(async ({ chatID }) => {
                     if (item.chatID === chatID) {
                        const docRef = doc(
                           firestoreDB,
                           "massages",
                           "msg-id-123"
                        );
                        const docSnap = await getDoc(docRef);
                        const data = docSnap.data();
                        return data;
                     }
                  })
               );

               const _newData = {
                  msgData: [...res],
                  ...items,
               };

               setNewData(newData);
            });
         });
      };
      getData();
   }, []);

   const handleSelectedFriend = (id: string) => {
      router.push("/messaging/" + id);
   };

   const sendMsg = async () => {
      if (!userUID) return null;
      // @ts-ignore

      if (!messages) {
         // @ts-ignore
         setMessages(["", { userID: userUID, _message: msg }]);

         await setDoc(doc(firestoreDB, "massages", "msg-id-123"), {
            users: [
               { userId: userUID, isResponding: false },
               { userId: selectedFriend, isResponding: false },
            ],
            messages: ["", { userID: userUID, _message: msg }],
         });
         return;
      }

      setMessages([...messages, { userID: userUID, _message: msg }]);
      await setDoc(doc(firestoreDB, "massages", "msg-id-123"), {
         users: [
            { userId: userUID, isResponding: false },
            { userId: selectedFriend, isResponding: false },
         ],
         messages: [...messages, { userID: userUID, _message: msg }],
      });
   };

   console.log("currentUsersChats =>", currentUsersChats);

   if (type === "messaging") {
      return (
         <>
            <S.MessagingScreenDiv className={className}>
               <S.ChatMessagesArea id="scroll">
                  {messages?.map(({ userID, _message }, index) => {
                     const isSender = userUID == userID;
                     if (!_message) return;
                     return (
                        <S.MessagingArea key={index}>
                           <Message sending={isSender} message={_message} />
                        </S.MessagingArea>
                     );
                  })}

                  {
                     // @ts-ignore
                     msgData?.users?.map(({ isResponding, userId }) => {
                        // userId !==userID
                        if (isResponding && userId !== userUID) {
                           return (
                              <S.MessagingArea>
                                 <Message type="response" />
                              </S.MessagingArea>
                           );
                        }
                     })
                  }
               </S.ChatMessagesArea>

               <S.InputAndBtnWrapper>
                  <S.MsgInput
                     type="text"
                     onChange={(evt) => setMsg(evt.target.value)}
                     value={msg}
                  />
                  <S.MsgSendBtn onClick={sendMsg}>Send</S.MsgSendBtn>
               </S.InputAndBtnWrapper>
            </S.MessagingScreenDiv>
         </>
      );
   }

   if (type === "select-contact") {
      return (
         <>
            <S.MessagingScreenDiv className={className}>
               {friendsList.map(
                  ({ firstName, lastName, userID, userImage, chats }) => {
                     let messageID;
                     const r = chats?.filter((elem) =>
                        currentUsersChats.find(
                           ({ chatID }) => elem.chatID === chatID
                        )
                     );

                     if (r?.length > 0) {
                        messageID = r[0].chatID;
                     } else {
                        messageID = uid();
                     }


                     return (
                        <FriendsModal
                           onClick={handleSelectedFriend}
                           key={userID}
                           type="mobile messaging"
                           fullName={`${firstName} ${lastName}`}
                           uid={userID}
                           currentUserUid={userUID}
                           friendsRequestList={undefined}
                           imageUrl={userImage}
                           chatID={messageID}
                        />
                     );
                  }
               )}
            </S.MessagingScreenDiv>
         </>
      );
   }

   return (
      <S.MessagingScreenDiv className={className}>
         <S.MessagingBtn>
            <MessageDetail id="icon" />
         </S.MessagingBtn>
      </S.MessagingScreenDiv>
   );
}
