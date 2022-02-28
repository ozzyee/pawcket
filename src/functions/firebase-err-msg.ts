/* eslint-disable eqeqeq */
export const errorMessage = (error: string | null) => {
   console.log(error, "123");

   if (error === "Firebase: Error (auth/internal-error).") {
      return "You must fill in a valid password";
   }

   if (error === "Firebase: Error (auth/invalid-email).") {
      return "You must enter a valid email address";
   }
   if (
      error ==
      "FirebaseError: Firebase: The password is invalid or the user does not have a password. (auth/wrong-password)."
   ) {
      return "Wrong Password";
   }

   if (
      error ==
      "FirebaseError: Firebase: The email address is badly formatted. (auth/invalid-email)."
   ) {
      return "The email address is badly formatted";
   }

   if (
      error ==
      "FirebaseError: Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found)."
   ) {
      return "There is no user corresponding with these details";
   }

   if (
      error ==
      "FirebaseError: Firebase: The email address is already in use by another account. (auth/email-already-in-use)."
   ) {
      return "This email is already in use by another account";
   }

   if (error == "Firebase: Error (auth/user-not-found).") {
      return "There isn't a user with these credential's ";
   }

   if (error == "Firebase: Error (auth/wrong-password).") {
      return "Wrong password";
   }

   if (
      error ==
      "FirebaseError: Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
   ) {
      return "you account has been temporarily disabled due to too many failed logins";
   }

   if (error === "Firebase: Error (auth/email-already-in-use).") {
      return "These credentials are in use";
   }

   return "default-err";
};
