/* eslint-disable @next/next/link-passhref */
import React from "react";
import * as S from "./navbar.style";
import { TNavbarProps } from "./navbar.definition";
import NavbarIcon from "./_partials/navbar-icon/navbaricon.component";
import { Search } from "@styled-icons/boxicons-regular/Search";
import Link from "next/link";
import { useRouter } from "next/router";

const icons = [
   {
      name: "Feed",
      direct: "./news-feed",
      picture: "icons/feed-icon-nav.svg",
   },
   {
      name: "Misc",
      direct: "/friends",
      picture: "icons/miscellaneous-icon-nav.svg",
   },
   {
      name: "User",

      direct: "/create-user",
      picture: "icons/user-icon.svg",
   },
   {
      name: "Chat",
      direct: "/messaging",
      picture: "icons/message-icon-nav.svg",
   },
   {
      name: "Vet",
      direct: "/vets",
      picture: "icons/vet-icon-nav.svg",
   },
];

export function Navbar({ className, type, requests }: TNavbarProps) {
   const router = useRouter();
   // requests

   if (type === "mobile-friends") {
      return (
         <S.FriendsNav>
            <Link href="/friends/my-friends">
               <S.NavBtn
                  className={
                     router.pathname === "/friends/my-friends" ? "active" : ""
                  }
               >
                  My Friends
               </S.NavBtn>
            </Link>

            <Link href="/friends/requests">
               <S.NavBtn
                  className={
                     router.pathname === "/friends/requests" ? "active" : ""
                  }
               >
                  Requests ({requests})
               </S.NavBtn>
            </Link>

            <Link href="/friends/search">
               <S.NavBtn
                  className={
                     router.pathname === "/friends/search" ? "active" : ""
                  }
               >
                  <Search id="icon" />
               </S.NavBtn>
            </Link>
         </S.FriendsNav>
      );
   }

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
