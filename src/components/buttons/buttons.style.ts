import styled from "styled-components";
import { buttonStylePros } from "./buttons.definition";

export const ButtonsDiv = styled.button<buttonStylePros>`
   background-color: ${({ backgroundColor }) => backgroundColor};
   width: 250px;
   height: 40px;
   border-color: transparent;
   border-radius: 11px;
   color: white;
   font-size: 0.9rem;
`;
