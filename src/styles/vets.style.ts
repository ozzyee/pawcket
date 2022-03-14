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
   z-index: 1;
   padding: 0;
   margin: 0;
`;

export const Mobile = styled.span`
   .nav {
      width: 100vw;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 2;
   }
   @media (min-width: ${styles.breakPoints.m}) {
      .mobile {
         display: none;
      }
   }
`;

export const VetList = styled.ol`
   display: flex;
   flex-direction: column;
   list-style-type: none;
   align-items: center;
   justify-content: center;
   padding: 0px;
   padding-bottom:60px ;
   @media (min-width: ${styles.breakPoints.m}) {
      display: grid;
      grid-template-columns: repeat(3, 33%);
      padding: 0px;
      place-items: center;
      overflow-y: scroll;
      height: 90%;
      max-height: 365px;

      ::-webkit-scrollbar {
         width: 6px;
         visibility: hidden;
      }

      :hover::-webkit-scrollbar {
         width: 6px;
         visibility: visible;
      }

      ::-webkit-scrollbar-track {
         background: transparent;
         border-radius: 50px;
      }

      ::-webkit-scrollbar-thumb {
         background-color: ${styles.colors.primary};
         border-radius: 50px;
      }
      .vetcard {
         grid-column-end: span;
      }
   }
`;

export const VetButtons = styled.ol`
   display: flex;
   padding: 0;
   list-style-type: none;
   justify-content: space-between;
`;

export const Desktop = styled.div`
   .desktop {
      display: none;
   }

   @media (min-width: ${styles.breakPoints.m}) {
      .desktop {
         display: flex;
      }
   }
`;

export const Top = styled.div`
   height: 40%;

   .nav {
      position: absolute;
      top: 0;
      right: 0;
      width: 40%;
      border-radius: 0 0 0 50px;
   }
`;

export const Bottom = styled.div`
   height: 60%;
   .wrapper {
      height: 85%;
      padding: 5% 0;
   }
   ol {
      height: 100%;
      max-height: 110%;
      padding: 0 2%;
   }

   .vetsep {
      left: 5%;
      position: relative;
      z-index: 3;
      width: 90%;
   }
   .vetsep::before {
      height: 3.5px;
   }
`;
export const TopLeft = styled.div`
   height: 100%;
   width: 40%;
   float: left;
   display: flex;
   justify-content: center;
   align-items: center;
`;
export const TopRight = styled.div`
   display: flex;
   height: 100%;
   width: 60%;
   float: right;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   .title {
      color: black;
      text-align: center;
      margin-bottom: 0px;
   }
   .vets {
      margin: 0 50%;
      width: 80%;
   }
   .vetbuttons {
      width: 100%;
      justify-content: space-evenly;
   }
   button {
      margin-top: 50%;
      transform: scale(1.7);
   }
`;
