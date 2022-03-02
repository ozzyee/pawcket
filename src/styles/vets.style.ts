import styled from "styled-components";
import styles from "./style.config.json";

export const FrameVets = styled.span`
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
      content: "";
      background: url("/vet-icon-nav.svg");
      height: 50px;
      width: 50px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      /* font-weight: bolder;
      font-size: 8em;
      color: white; */
      position: relative;
   }

   @media (min-width: ${styles.breakPoints.m}) {
      &.margin-top {
         position: absolute;
         bottom: 0;
      }
   }
`;

export const VetNav = styled.div`
   width: 100%;

   position: fixed;
   bottom: 0;
   z-index: 999999999;
   padding: 0;
   margin: 0;
`;
