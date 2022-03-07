import styled from "styled-components";
import { GlobalStyle } from "../../../../styles/global.style";

export const InteractionList = styled.ul`
   display: flex;
   justify-content: space-around;
   padding: 0;
   margin-top: 5%;
`;

export const InteractionButton = styled.li`
   display: inline-block;
   background-color: orange;
   border-radius: 15px;
   padding: 8px;
   color: #ffffff;
   font-family: Poppins;
   min-width: 100px;
   text-align: center;
`;
