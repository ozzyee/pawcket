import styled from "styled-components";
import { navbarStylesPros } from "./navbar.definition";
import { listStylesPros } from "./navbar.definition";

export const NavbarDiv = styled.div<navbarStylesPros>`
   display: flex;
   background-color: #219ebc;
   padding: 40px;
   color: black;
   font-size: 2rem;
   list-style-type: none;
`;

export const List = styled.ul<listStylesPros>`
   list-style-type: none;
`;
