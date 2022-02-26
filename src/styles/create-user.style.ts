import styled from "styled-components";
export const CrossFrameUser = styled.span`
   width: 150px;
   height: 150px;
   background-color: red;
   background: url("/frame.svg");
   background-size: contain;
   background-position: center;
   background-repeat: no-repeat;
   overflow: hidden;
   display: flex;
   justify-content: center;
   align-items: center;
   filter: drop-shadow(10px 10px 10px rgba(207, 92, 54, 0.8));
   ::after {
      content: "+";
      font-weight: bolder;
      font-size: 8em;
      color: white;
      position: relative;
   }
`;
