/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useEffect, useRef, useState } from "react";
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
import { handleSelectedFriend } from "../../functions/messaging/selected-friend";
import { Send } from "@styled-icons/boxicons-regular/Send";
import { Images } from "@styled-icons/bootstrap/Images";
import { ImageUploader } from "../../functions/dynamic-imports";

type TFriendsList = {
   fullName: string;
   image: string;
   chatData: { chatID: string; lastMsg: { userID: string; _message: string } };
};

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
   const [msgData, setMsgData] = useState<DocumentData | undefined>({});
   const [respondingToMsg, setRespondingToMsg] = useState(false);
   const [currentUsersChats, setCurrentUsersChats] = useState([]);
   const [_selectedFriend, setSelectedFriend] = useState({});
   const [friend, setFriend] = useState<TFriendsList>();
   const [_data, setData] = useState<TFriendsList[] | null>(null);
   const hiddenImageUploader = useRef(null);
   const [img, setImg] = useState("");

   useEffect(() => {
      if (!_data) {
         // @ts-ignore
         setData([friend]);
         return;
      }
      // @ts-ignore
      setData([..._data, friend]);
   }, [friend]);
   console.log("friend =>", _data);

   useEffect(() => {
      const sendImag = async () => {
         if (!userUID) return null;

         if (!messages) {
            setMessages([{ userID: userUID, _message: img }]);
            if (!messageID) return;
            await setDoc(doc(firestoreDB, "massages", messageID), {
               users: [
                  { userId: userUID, isResponding: false },
                  { userId: selectedFriend, isResponding: false },
               ],
               messages: ["", { userID: userUID, _message: img }],
            });
            return;
         }

         setMessages([...messages, { userID: userUID, _message: img }]);
         if (!messageID) return;
         await setDoc(doc(firestoreDB, "massages", messageID), {
            users: [
               { userId: userUID, isResponding: false },
               { userId: selectedFriend, isResponding: false },
            ],
            messages: [...messages, { userID: userUID, _message: img }],
         });
      };

      if (img) {
         sendImag();
      }
   }, [img]);

   useEffect(() => {
      if (!userUID) return;
      onSnapshot(doc(firestoreDB, "users", userUID), (doc) => {
         const data = doc.data();
         const friends = data?.friends;
         setAllFriends(friends);
         setCurrentUsersChats(data?.chats);
      });

      if (!messageID) return;
      onSnapshot(doc(firestoreDB, "massages", messageID), (doc) => {
         const data = doc.data();
         setMsgData(data);

         if (!data?.messages) return;
         setMessages([...data.messages]);
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

      const getUser = (
         userID: string,
         chatData: {
            chatID: string;
            lastMsg: {
               userID: string;
               _message: string;
            };
         }
      ) => {
         onSnapshot(doc(firestoreDB, "users", userID), (doc) => {
            const data = doc.data();
            const _data = {
               fullName: data?.firstName + " " + data?.lastName,
               image: data?.userImage,
               chatData,
            };

            setFriend(_data);
         });
      };

      allFriends.map(({ chatID }) => {
         if (chatID) {
            onSnapshot(doc(firestoreDB, "massages", chatID), (doc) => {
               const data = doc.data();
               const users = data?.users;
               const friend = users?.filter(
                  ({ userId }: { userId: string }) => userId !== userUID
               );
               const lastMsgPosition = data?.messages?.length - 1;

               const chatData = {
                  chatID,
                  lastMsg: data?.messages[lastMsgPosition],
               };
               if (!friend) return;
               getUser(friend[0]?.userId, chatData);
            });
         }
      });
   }, [allFriends]);

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
      const _users = msgData?.users;
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

   const sendMsg = async () => {
      if (!userUID) return null;
      setMsg("");

      if (!messages) {
         setMessages([{ userID: userUID, _message: msg }]);
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

   const sendImg = () => {
      // @ts-ignore
      hiddenImageUploader.current?.click() as React.MutableRefObject<null>;
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

                  {msgData?.users?.map(
                     ({
                        isResponding,
                        userId,
                     }: {
                        isResponding: boolean;
                        userId: string;
                     }) => {
                        // userId !==userID
                        if (isResponding && userId !== userUID) {
                           return (
                              <S.MessagingArea>
                                 <Message type="response" />
                              </S.MessagingArea>
                           );
                        }
                     }
                  )}
                  <ImageUploader
                     _ref={hiddenImageUploader}
                     onChange={(imgUrl) => {
                        setImg(imgUrl);
                     }}
                     folder={`/${userUID}/messages`}
                  />
               </S.ChatMessagesArea>

               <S.InputAndBtnWrapper>
                  <S.MsgInput
                     type="text"
                     onChange={(evt) => setMsg(evt.target.value)}
                     value={msg}
                     placeholder="Enter a message"
                  />

                  <S.MsgSendBtn onClick={sendMsg}>
                     <Send id="send-icon" />
                  </S.MsgSendBtn>
                  <S.MsgSendBtn onClick={sendImg}>
                     <Images id="send-icon" />
                  </S.MsgSendBtn>
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
                           onClick={(id: string) => {
                              handleSelectedFriend(id, userUID);
                           }}
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
            {_data?.map((item, index) => {
               if (!item) return;
               console.log(item);

               const {
                  chatData: { chatID, lastMsg },
                  fullName,
                  image,
               } = item;

               let msg;

               if (lastMsg.userID === userUID) {
                  msg = "You: " + lastMsg._message;
               } else {
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
            })}
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
