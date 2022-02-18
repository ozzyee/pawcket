import { TNavbarIconProps } from "./navbaricon.definition";
import Link from "next/link";
import Image from "next/link";

export default function NavbarIcon({name, direct, onClick} : TNavbarIconProps){
    return (
        <Link href={direct} passHref>
    <li><Image src={name} alt="A picture" width={500} height={500}/></li>
    </Link>
    )}