import styled from "styled-components";
import { navbarStylesPros } from "./navbar.definition";
import { listStylesPros } from "./navbar.definition";
import styles from "../../styles/style.config.json";

export const NavbarDiv = styled.div<navbarStylesPros>`
   background-color: ${styles.colors.blue};
   padding: 1px;
`;
//    position: fixed;
//    z-index : 9999;
//    width: 100vw;
//    bottom: 0;
//    height: 6vh;

export const List = styled.ul<listStylesPros>`
   //    list-style-type: none;
   //    display: flex;

   justify-content: space-between;
   align-items: center;
   justify-content: space-evenly;
   align-items: center;
   padding: 0;
   display: flex;
`;

export const FriendsNav = styled.nav`
   border-bottom: 1px solid ${styles.colors.primary};
   margin-top: 1.6rem;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const NavBtn = styled.button`
   width: 100px;
   background-color: transparent;
   border-color: transparent;
   color: ${styles.colors.primary};
   font-size: 0.9rem;
   padding: 0;
   margin: 0;

   :active {
      transform: scale(0.9);
   }

   #icon {
      width: 1.3rem;
   }

   &.active {
      font-weight: bold;
      color: ${styles.colors.orange};
   }
`;
