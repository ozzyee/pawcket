export type TMessagingScreenProps = {
   className?: string;
   type?: string;
   userUID: string | undefined;
   selectedFriend?: string;
   messageID?: string;
};

export type TMessage = {
   userID: string | undefined;
   _message: string | undefined;
};
