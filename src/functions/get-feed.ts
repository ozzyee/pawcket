import { doc, getDoc } from "@firebase/firestore";
import { firestoreDB } from "../lib/firebase/firebase.initialize";
import { TFeed } from "../types/feed-definition";

export const getUser = async (userID: string) => {
   const docRef = doc(firestoreDB, "users", userID);
   const docSnap = await getDoc(docRef);
   const _data = docSnap.data();
   if (!_data) return null;
   const userData = {
      fullName: _data.firstName + " " + _data.lastName,
      userImage: _data.userImage,
   };
   return userData;
};

export const getPost = async ({ feed }: { feed: TFeed[] }) => {
   if (!feed) return null;

   const post = await Promise.all(
      feed.map(async ({ userID, post, likes, comments }) => {
         const author = await getUser(userID);

         const commentsData = await Promise.all(
            comments.map(async (comment) => {
               const commentAuthor = await getUser(comment?.userID);

               const commentAuthorData = {
                  user: {
                     fullName: commentAuthor?.fullName,
                     userImage: commentAuthor?.userImage,
                  },
                  comment: comment.comment,
               };

               return commentAuthorData;
            })
         );

         const likesData = await Promise.all(
            likes.map(async (like) => {
               const likeAuthor = await getUser(like?.userID);

               const commentAuthorData = {
                  user: {
                     fullName: likeAuthor?.fullName,
                     userImage: likeAuthor?.userImage,
                     uid: like?.userID,
                  },
               };

               return commentAuthorData;
            })
         );

         const postData = {
            user: {
               fullName: author?.fullName,
               userImage: author?.userImage,
            },
            comments: commentsData,
            post,
            likes: likesData,
         };

         return postData;
      })
   );

   return post;
};
