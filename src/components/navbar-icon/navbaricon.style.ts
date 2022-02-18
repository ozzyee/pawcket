import styled from "styled-components";
import { navbarIconStylesPros } from "./navbaricon.definition";

export const NavbarDiv = styled.div<navbarIconStylesPros>`
   background-color: ${({ backgroundColor }) => backgroundColor};
   width: 250px;
   height: 40px;
   color: black;
   font-size: 3rem;
    display : flex;
   :active {
      transform: scale(0.95);
   }
`;