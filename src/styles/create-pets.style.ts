import styled from "styled-components";
import styles from "./style.config.json";

export const CrossFrame = styled.span`
   width:120px;
   height: 120px;
   background-color: red;
   overflow: hidden;
   display: flex;
   justify-content: center;
   align-items: center;

   ::after{
       content: "+";
       font-weight: bolder;
       font-size: 12em;
       color: white;
       position: relative;
   }
`;


