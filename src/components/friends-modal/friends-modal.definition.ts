/* eslint-disable no-unused-vars */
export type TFriendsModalProps = {
   className?: string;
   fullName: string;
   sentRequest: boolean;
   imageUrl?: string;
   userStatus?: string;
   onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
   uid: string;
   currentUserUid: string | undefined;
   friendsRequestList: any;
};
