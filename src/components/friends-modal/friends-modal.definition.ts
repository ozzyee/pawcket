/* eslint-disable no-unused-vars */
export type TFriendsModalProps = {
   className?: string;
   fullName: string;
   sentRequest?: boolean;
   imageUrl?: string;
   userStatus?: string;

   onClickAddFriend?: React.MouseEventHandler<HTMLButtonElement> | undefined;
   onClickRemoveFriend?: React.MouseEventHandler<HTMLButtonElement> | undefined;
   onClickSendFriendRequest?:
      | React.MouseEventHandler<HTMLButtonElement>
      | undefined;
   onClickUnsendFriendRequest?:
      | React.MouseEventHandler<HTMLButtonElement>
      | undefined;

   uid: string;
   currentUserUid: string | undefined;
   friendsRequestList: any;
   type?: string;
   status?: string;
   onClick?: any;
   chatID?: string;
   message?: string;
};
