import React from "react";
import * as S from "./navbar.style";
import { TNavbarProps } from "./navbar.definition";
import NavbarIcon from "./_partials/navbar-icon/navbaricon.component";

const icons = [
   {
      name: "Feed",
      direct: "./feed",
      picture: "icons/feed-icon-nav.svg",
   },
   {
      name: "Misc",
      direct: "./misc",
      picture: "icons/miscellaneous-icon-nav.svg",
   },
   {
      name: "User",
      direct: "./create-user",
      picture: "icons/user-icon.svg",
   },
   {
      name: "Chat",
      direct: "./messaging",
      picture: "icons/message-icon-nav.svg",
   },
   {
      name: "Vet",
      direct: "./vets",
      picture: "icons/vet-icon-nav.svg",
   },
];

export function Navbar({ className }: TNavbarProps) {
   return (
      <S.NavbarDiv className={className} backgroundColor={"219ebc"}>
         <S.List className="list" listStyleType="none">
            {icons.map((icon, index) => {
               return (

                  <NavbarIcon
                     key={index}
                     direct={icon.direct}
                     name={icon.name}
                     picture={icon.picture}
                  />
               );
            })}
         </S.List>
      </S.NavbarDiv>
   );
}
