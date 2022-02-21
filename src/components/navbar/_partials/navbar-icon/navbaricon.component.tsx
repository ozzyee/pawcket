import { TNavbarIconProps } from "./navbaricon.definition";
import Link from "next/link";
import Image from "next/image";
import { ListItem } from "./navbaricon.style";
import { withTheme } from "styled-components";
import User from "../icons/user-icon.svg";
import Feed from "../icons/feed-icon-nav.svg";
import Misc from "../icons/miscellaneous-icon-nav.svg";
import Chat from "../icons/message-icon-nav.svg";
import Vet from "../icons/vet-icon-nav.svg";

export default function NavbarIcon({
   name,
   direct,
   picture,
   children,
}: TNavbarIconProps) {
   return (
      <Link href={direct}>
         <ListItem>
            <User className="icon" />
         </ListItem>
      </Link>
   );
}
