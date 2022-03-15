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
   messageID,
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
   const [_selectedFriend, setSelectedFriend] = useState({});
   const [crrUserData, setCurrUserData] = useState({});
   const [friend, setFriend] = useState([]);

   useEffect(() => {
      if (!userUID) return;
      onSnapshot(doc(firestoreDB, "users", userUID), (doc) => {
         const data = doc.data();
         const friends = data?.friends;
         setAllFriends(friends);
         setCurrentUsersChats(data?.chats);
         // @ts-ignore
         setCurrUserData(data);
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

      const getUser = (userID: string, chatData: any) => {
         onSnapshot(doc(firestoreDB, "users", userID), (doc) => {
            const data = doc.data();
            console.log(data);
            const _data = {
               fullName: data?.firstName + " " + data?.lastName,
               image: data?.userImage,
               chatData,
            };
            // @ts-ignore
            setFriend([...friend, { ..._data }]);
         });
      };

      allFriends.map(({ chatID }) => {
         if (chatID) {
            onSnapshot(doc(firestoreDB, "massages", chatID), (doc) => {
               const data = doc.data();
               const users = data?.users;
               const friend = users.filter(
                  ({ userId }: { userId: string }) => userId !== userUID
               );
               const lastMsgPosition = data?.messages.length - 1;

               const chatData = {
                  chatID,
                  lastMsg: data?.messages[lastMsgPosition],
               };
               getUser(friend[0].userId, chatData);
            });
         }
      });
   }, [allFriends]);

   useEffect(() => {
      if (!messageID) return;

      onSnapshot(doc(firestoreDB, "massages", messageID), (doc) => {
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
      if (!messageID) return;
      updateDoc(doc(firestoreDB, "massages", messageID), {
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
                        if (!messageID) return;
                        const docRef = doc(firestoreDB, "massages", messageID);
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

   const sendMessageDataToUser = async (newData: any) => {
      if (!userUID) return null;
      await setDoc(doc(firestoreDB, "users", userUID), {
         ...newData,
      });
   };

   const sendMessageDataToFriend = async (
      newData: any,
      userID: any,
      messageID: any
   ) => {
      await setDoc(doc(firestoreDB, "users", userID), {
         ...newData,
      });

      await setDoc(doc(firestoreDB, "massages", messageID), {
         users: [
            { userId: userUID, isResponding: false },
            { userId: userID, isResponding: false },
         ],
         messages: [""],
      });
      router.push("/messaging/" + messageID);
   };

   const handleSelectedFriend = async (id: string) => {
      const userID = id.split("/")[1];
      const messageID = id.split("/")[0];

      if (!userUID) return;
      // set message id to friendßs
      onSnapshot(doc(firestoreDB, "users", userID), async (doc) => {
         const data = doc.data();
         const result = data?.friends.filter(
            ({ friendID }: { friendID: string }) => friendID === userUID
         );

         if (!result[0].chatID) {
            const friend = data?.friends;
            const objIndex = friend?.findIndex(
               ({ friendID }: { friendID: string }) => friendID == userUID
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
            await sendMessageDataToFriend(newData, userID, messageID);
         }

         if (result[0].chatID) {
            console.log("RES ->", result[0].chatID);
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
               ({ friendID }: { friendID: string }) => friendID == userID
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
            await sendMessageDataToUser(newData);
         }
      });
   };

   const sendMsg = async () => {
      if (!userUID) return null;
      // @ts-ignore

      if (!messages) {
         // @ts-ignore
         setMessages(["", { userID: userUID, _message: msg }]);
         if (!messageID) return;
         await setDoc(doc(firestoreDB, "massages", messageID), {
            users: [
               { userId: userUID, isResponding: false },
               { userId: selectedFriend, isResponding: false },
            ],
            messages: ["", { userID: userUID, _message: msg }],
         });
         return;
      }

      setMessages([...messages, { userID: userUID, _message: msg }]);
      if (!messageID) return;
      await setDoc(doc(firestoreDB, "massages", messageID), {
         users: [
            { userId: userUID, isResponding: false },
            { userId: selectedFriend, isResponding: false },
         ],
         messages: [...messages, { userID: userUID, _message: msg }],
      });
   };

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
                        currentUsersChats?.find(
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
         <S.usersMessages>
            {friend.map(
               ({ chatData: { chatID, lastMsg }, fullName, image }, index) => {
                  let msg;

                  // @ts-ignore
                  if (lastMsg.userID === userUID) {
                     // @ts-ignore

                     msg = "You: " + lastMsg._message;
                  } else {
                     // @ts-ignore

                     msg = lastMsg._message;
                  }

                  return (
                     <FriendsModal
                        key={index}
                        onClick={() => {
                           router.push("/messaging/" + chatID);
                        }}
                        type="mobile messaging"
                        fullName={fullName}
                        uid={""}
                        currentUserUid={userUID}
                        friendsRequestList={undefined}
                        imageUrl={image}
                        chatID={messageID}
                        message={msg}
                     />
                  );
               }
            )}
         </S.usersMessages>
         <S.MessagingBtn>
            <MessageDetail
               id="icon"
               onClick={() => {
                  router.push("/messaging/select-contact");
               }}
            />
         </S.MessagingBtn>
      </S.MessagingScreenDiv>
   );
}
