/* eslint-disable no-unused-vars */
import { NextApiRequest, NextApiResponse } from "next";

export interface IAuthContract {
   signOut(): void;
   signup({
      firstName,
      lastName,
      email,
      password,
   }: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
   }): Promise<void>;
   signinPassword({
      email,
      password,
   }: {
      email: string;
      password: string;
   }): Promise<string | undefined>;
   googleSignIn(location: string): Promise<void>;
   facebookSignIn(location: string): void;
}
