import React from "react";
import * as S from "./navbar.style";
import styles from "../../styles/style.config.json";
import { TNavbarProps } from "./navbar.definition";
import NavbarIcon from "./_partials/navbar-icon/navbaricon.component";

const icons = [
   {
      name: "Feed",
      direct: "./feed",
      picture: "../../../public/icons/back-arrow-icon.svg",
   },
   {
      name: "Profile",
      direct: "./profile",
      picture: "../../../public/icons/back-arrow-icon.svg",
   },
   {
      name: "Vets",
      direct: "./vets",
      picture: "../../../public/icons/back-arrow-icon.svg",
   },
];

export function Navbar({ className }: TNavbarProps) {
   return (
      <S.NavbarDiv className={className} backgroundColor={"green"}>
         <ul>
            {icons.map((icon) => {
               return (
                  <div>
                     <NavbarIcon
                        direct={icon.direct}
                        name={icon.name}
                        picture={icon.picture}
                     >
                        sdij
                     </NavbarIcon>
                  </div>
               );
            })}
         </ul>
      </S.NavbarDiv>
   );
}
