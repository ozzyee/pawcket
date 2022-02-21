import styled from "styled-components";
import { navbarIconStylesPros } from "./navbaricon.definition";

// export const NavbarDiv = styled.div<navbarIconStylesPros>`
//    background-color: ${({ backgroundColor }) => backgroundColor};
//    width: 250px;
//    height: 40px;
//    color: black;
//    font-size: 3rem;
//    display: flex;
//    :active {
//       transform: scale(0.95);
//    }
// `;

export const ListItem = styled.li`
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   border: 2px solid red;
   width: 100px;
   height: 100px;
`;
