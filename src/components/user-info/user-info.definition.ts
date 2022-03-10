import { DocumentData } from "firebase/firestore"
import { TUser } from "../../../dummy-data/dummy-data"

export type TUserInfoProps = {
    user: TUser | DocumentData;
    className?: string;
}