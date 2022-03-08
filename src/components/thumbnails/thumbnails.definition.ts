import { TUser } from "../../../dummy-data/dummy-data";
import { TPet } from "../../layouts/creat-pet-form/creat-pet-form.definition";

export type TThumbnailsProps ={
    data: TUser[] & TPet[];
    isForPets: boolean;
    isAFriend: boolean;
    className?: string;
    userName?: string;
}