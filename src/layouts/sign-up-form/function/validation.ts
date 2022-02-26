import { TErrors, TValidation } from "../../../types/auth-definitions";

export const Validation = ({ email, password, confirm }: TValidation) => {
   const errors: TErrors = {
      email: undefined,
      password: undefined,
      confirm: undefined,
   };

   if (!email) {
      errors.email = "Email required";
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "This email is badly formatted.";
   }

   if (!password) {
      errors.password = "Password required";
   } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(password)) {
      errors.password = "Your password is too weak please try a stronger one";
   }

   if (!confirm) {
      errors.confirm = "Confirm password required";
   } else if (confirm !== password) {
      errors.confirm = "Passwords dont match";
   }

   return errors;
};
