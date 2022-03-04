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
