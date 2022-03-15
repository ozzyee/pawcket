export type TUserData = {
   DOB: string;
   address: string;
   email: string;
   extraInfo: string;
   firstName: string;
   lastName: string;
   postCode: string;
   tel: string;
   userID: string;
   userImage: string;
   fullName: string;
   fullNameReverse: string;
   userName: string;
   friendsRequests: any;
   chats: {
      chatID: string;
   }[];
   friends: {
      friendID: string;
      requestAccepted: boolean;
   }[];
};

export type TAddFriend = {
   id: string;
   userUID: string | undefined;
   currentUserData: any;
};
