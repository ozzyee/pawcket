import { TFrameProps } from "./frame.definition";
import styled from "styled-components";

export const CrossFrame = styled.span<TFrameProps>`
   width:${props => !props.diameter ? `150px` : props.diameter + "px"} ;
   height: ${props => !props.diameter ? `150px` : props.diameter+ "px"} ;
   background: url(${props => props.background});
   background-size: contain;
   background-position: center;
   background-repeat: no-repeat;
   display: flex;
   justify-content: center;
   align-items: center;
   filter: drop-shadow(10px 10px 10px rgba(207, 92, 54, 0.8));
   padding: ${props => !props.diameter ? `45px 45px 0 45px` : (props.diameter * 0.20) + "px"};
   padding-bottom: ${props => !props.diameter ? `35px` : (props.diameter * 0.20 - 10) + "px"};

   ::after{
       ${props => !props.img ?
       `content: "+";` :
       `
       content:"";
       background: url(${props.img});
       background-size: cover;
       background-position: center;
       background-repeat: no-repeat;
       `
       }
       display: grid;
       place-content: center;
       position: absolute;
       border-radius: 100%;
       font-weight: 100;
       font-size: 8rem;
       color: white;
       width:${props => !props.diameter ? `150px` : (props.diameter - props.diameter * 0.20) + "px"} ;
       height: ${props => !props.diameter ? `150px` : (props.diameter - props.diameter * 0.20) + "px"} ;
    }

`;

