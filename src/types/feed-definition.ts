export type TFeed = {
   comments: {
      comment: string;
      userID: string;
   }[];
   likes: {
      userID: string;
   }[];
   post: string;
   userID: string;
};

export type TFeedData = {
   comments: {
      comment: string|undefined;
      user: {
         fullName: string;
         userImage: string;
      };
   }[];
   likes: {
      user: {
         fullName: string;
         uid: string;
         userImage: string;
      };
   }[];
   post: string;
   user: { fullName: string; userImage: string };
};
