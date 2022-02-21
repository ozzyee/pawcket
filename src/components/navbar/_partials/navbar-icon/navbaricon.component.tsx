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

   function getIcon(){
      switch(name){
         case "Feed" :
            return setIcon(Feed)
         case "Misc" :
            return setIcon(Misc)
         case "User" :
            return setIcon(User)
         case "Chat" :
            return setIcon(Chat)
         case "Vet" :
            return setIcon(Vet)
         }
   }

   useEffect(()=>{
      getIcon();
   }, [])

   return (
      <Link href={direct}>
         <ListItem>
            <div className={name}>
          {icon}
            </div>
         </ListItem>
      </Link>
   );
}
