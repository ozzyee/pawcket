import { TFrameProps } from "./frame.definition";
import styled from "styled-components";

export const CrossFrame = styled.span<TFrameProps>`
   width: ${(props) => (!props.diameter ? `150px` : props.diameter + "px")};
   height: ${(props) => (!props.diameter ? `150px` : props.diameter + "px")};
   background: url("/frame.svg");
   background-size: contain;
   background-position: center;
   background-repeat: no-repeat;
   display: flex;
   justify-content: center;
   align-items: center;
   filter: drop-shadow(10px 10px 10px rgba(207, 92, 54, 0.8));
   padding: ${(props) =>
      !props.diameter ? `45px 45px 0 45px` : props.diameter * 0.2 + "px"};
   padding-bottom: ${(props) =>
      !props.diameter ? `35px` : props.diameter * 0.2 - 10 + "px"};

   ::after {
      ${(props) =>
         !props.img
            ? `
            content: "+";

            padding:0;
            margin-top: -1.2rem;
            font-size: 86px !important;
         
            `
            : `
       content:"";
       background: url(${props.img});
       background-size: cover;
       background-position: center;
       background-repeat: no-repeat;

       margin-top: -0.4rem;

       `}
      /* display: grid; */
      place-content: center;
      position: absolute;
      border-radius: 100%;
      font-weight: 100;
      font-size: 8rem;
      color: white;

      display: flex;
      align-items: center;
      justify-content: center;

      width: ${(props) =>
         !props.diameter
            ? `150px`
            : props.diameter - props.diameter * 0.2 + "px"};
      height: ${(props) =>
         !props.diameter
            ? `150px`
            : props.diameter - props.diameter * 0.2 + "px"};
   }
   :active {
      ::after {
         transform: scale(0.9);
      }
   }
`;
