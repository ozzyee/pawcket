import { TFrameProps } from "./frame.definition";
import styled from "styled-components";

export const CrossFrame = styled.span<TFrameProps>`
   width:150px;
   height: 150px;
   background-color: red;
   background: url(${props => props.background});
   background-size: contain;
   background-position: center;
   background-repeat: no-repeat;
   overflow: hidden;
   display: flex;
   justify-content: center;
   align-items: center;
   filter: drop-shadow(10px 10px 10px rgba(207, 92, 54, 0.8));

   ::after{
       content: ${props => props.foreground};
       position: absolute;
       font-weight: 100;
       font-size: 8em;
       color: white;
       ${props => props.width && ({
        width: props.width})}
       ${props => props.height && ({
        height: props.height})}
    }

`;

