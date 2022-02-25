import styled from "styled-components";
import { navbarStylesPros } from "./navbar.definition";
import { listStylesPros } from "./navbar.definition";

export const NavbarDiv = styled.div<navbarStylesPros>`
   background-color: #219ebc;
   padding-left: 50px;
   padding-right: 50px;
`;

export const List = styled.ul<listStylesPros>`
   list-style-type: none;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;
