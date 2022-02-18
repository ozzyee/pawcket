import { TNavbarIconProps } from "./navbaricon.definition";
import Link from "next/link";

export default function NavbarIcon({name, direct, onClick} : TNavbarIconProps){
    return (
        <Link href={direct} passHref>
    <li onClick={onClick}>Icon: {name}</li>
    </Link>
    )}