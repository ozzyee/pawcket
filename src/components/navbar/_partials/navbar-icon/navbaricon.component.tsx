import { TNavbarIconProps } from "./navbaricon.definition";
import Link from "next/link";
import { ListItem } from "./navbaricon.style";
import User from "../icons/user-icon.svg";
import Feed from "../icons/feed-icon-nav.svg";
import Misc from "../icons/miscellaneous-icon-nav.svg";
import Chat from "../icons/message-icon-nav.svg";
import Vet from "../icons/vet-icon-nav.svg";
import { useState } from "react";

export default function NavbarIcon({ name, direct }: TNavbarIconProps) {
   const [icon] = useState();

   return (
      // eslint-disable-next-line @next/next/link-passhref
      <Link href={direct}>
         <ListItem>
            <div className={name}>
               {icon}
               <GetIcon icon={name} />
            </div>
         </ListItem>
      </Link>
   );
}

function GetIcon({ icon, className }: { icon: string; className?: string }) {
   switch (icon) {
      case "Feed":
         return <Feed className={"scale"} />;
      case "Misc":
         return <Misc className={"scale"} />;
      case "User":
         return <User className={"user-icon"} />;
      case "Chat":
         return <Chat className={"scale"} />;
      case "Vet":
         return <Vet className={"scale translate"} />;
      default:
         return null;
   }
}
