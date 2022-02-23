import { TNavbarIconProps } from "./navbaricon.definition";
import Link from "next/link";
import { ListItem } from "./navbaricon.style";
import User from "../icons/user-icon.svg";
import Feed from "../icons/feed-icon-nav.svg";
import Misc from "../icons/miscellaneous-icon-nav.svg";
import Chat from "../icons/message-icon-nav.svg";
import Vet from "../icons/vet-icon-nav.svg";
import { useEffect, useState } from "react";

export default function NavbarIcon({
   name,
   direct,
   picture,
   children,
}: TNavbarIconProps) {

   const [icon, setIcon] = useState();


   return (
      <Link href={direct}>
         <ListItem>
            <div className={name}>
          {icon}
          <GetIcon icon={name}/>
            </div>
         </ListItem>
      </Link>
   );
}

function GetIcon({icon, className}:{icon: string, className?: string}){
   switch(icon){
      case "Feed" :
         return <Feed className={"scale"}/>
      case "Misc" :
      return <Misc className={"scale"}/>;
      case "User" :
      return<User className={"user-icon"}/>;
      case "Chat" :
      return<Chat className={"scale"}/>;
      case "Vet" :
      return <Vet className={"scale"}/>
   default :
   return null;
}
   }