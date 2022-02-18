import styled from "styled-components";
import { navbarStylesPros } from "./navbar.definition";

export const NavbarDiv = styled.div<navbarStylesPros>`
   background-color: ${({ backgroundColor }) => backgroundColor};
   width: 250px;
   height: 40px;
   color: white;
   font-size: 0.9rem;
    display : flex;
   :active {
      transform: scale(0.95);
   }
`;