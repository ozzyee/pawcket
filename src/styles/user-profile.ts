import styled from "styled-components";
import styles from "./style.config.json";


export const InfoSection = styled.div`
   line-height: 70%;
   color: ${styles.colors.black};
   margin-bottom: 50px;
   padding: 0 5%;

   .bio {
      text-align: center;
      font-size: 1.2rem;
      line-height: 110%;
   }
   .placeholder {
      color: rgba(14, 23, 27, 0.5);
   }
`;
export const Mobile = styled.span`
   .nav {
      width: 100vw;
      position: fixed;
      bottom: 0;
      left: 0;
   }
   @media (min-width: ${styles.breakPoints.m}) {
      .mobile {
         display: none;
      }
   }
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
export const TopLeft = styled.div`
   float: left;
   max-width: 50%;
   max-height: 50%;
   width: 50%;
   height: 50%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   .name {
      color: ${styles.colors.black};
      font-weight: 800;
      transform: scale(1);
   }
`;
export const TopRight = styled.div`
   float: right;
   max-width: 50%;
   max-height: 50%;
   width: 50%;
   height: 50%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 0 5px;

   .bio {
      text-align: center;
      color: ${styles.colors.black};
      font-weight: 500;
      padding: 5%;
   }

   .desktopNav {
      position: absolute;
      top: 0;
      right: 0;
      width: 40%;
      padding: 0;
      border-radius: 0% 0% 0% 50px;
   }
   
   .desktopinfo{
       margin-top: 10%;
       width: 100%;
       height: 65%;
       overflow-y: scroll;
   }

   .desktopPassport {
      display: grid;
      overflow: scroll;
      height: 90%;
      overflow-x: hidden;
      margin-top: 0;
      transform: translatey(-5%);
      line-height: 0%;
   }

   .desktopinfo::-webkit-scrollbar {
      width: 6px;
   }

   .desktopinfo::-webkit-scrollbar-thumb {
      background-color: ${styles.colors.primary};
      border-radius: 50px;
   }

   .desktopinfo::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 50px;
   }
`;
export const BottomLeft = styled.div`
   float: left;
   width: 50%;
   height: 50%;
   
   button {
       grid-column: unset;
      width: 100px;
      height: 100px;
      border-radius: 100%;
   }

   .desktopPets{
   display: grid;
   grid-template-columns: repeat(2, 50%);
   grid-auto-rows: 150px;
   place-items: center;
   margin: 10px 0px;
    }

   .separator {
       display: grid;
      width: 90%;
      margin: 0 5%;
      position: relative;
      z-index: 5;
   }
   .placeholder {
      color: rgba(14, 23, 27, 0.5);
   }

   .petPic::after{
       visibility: hidden;
        position: relative;
        top: -110%;
        width: 100%;
        height: 100%;
        border-radius: 100px;
        color:white;
        background-color: rgba(255,255,255,0.1);
        backdrop-filter: blur(10px);
        display: grid;
        place-content: center;
   }

   .petPic:hover::after{
       visibility: visible;
   }

   .desktopPassport {
      display: grid;
      overflow: scroll;
      height: 90%;
      overflow-x: hidden;
      margin-top: 0;
      transform: translatey(-5%);
      line-height: 0%;
   }

   .desktopPassport::-webkit-scrollbar {
      width: 6px;
   }

   .desktopPassport:hover::-webkit-scrollbar {
      width: 6px;
   }

   .desktopPassport::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 50px;
   }

   .desktopPassport::-webkit-scrollbar-thumb {
      background-color: ${styles.colors.primary};
      border-radius: 50px;
   }

`;

export const BottomRight = styled.div`
   float: left;
   width: 50%;
   height: 50%;
   
   button {
       grid-column: unset;
      width: 100px;
      height: 100px;
      border-radius: 100%;
   }

   .desktopPets{
   display: grid;
   grid-template-columns: repeat(2, 50%);
   grid-auto-rows: 150px;
   place-items: center;
   margin: 10px 0px;
    }

   .separator {
       display: grid;
      width: 90%;
      margin: 0 5%;
      position: relative;
      z-index: 5;
   }
   .placeholder {
      color: rgba(14, 23, 27, 0.5);
   }

   .petPic::after{
       visibility: hidden;
        position: relative;
        top: -110%;
        width: 100%;
        height: 100%;
        border-radius: 100px;
        color:white;
        background-color: rgba(255,255,255,0.1);
        backdrop-filter: blur(10px);
        display: grid;
        place-content: center;
   }

   .petPic:hover::after{
       visibility: visible;
   }

   .desktopPassport {
      display: grid;
      overflow: scroll;
      height: 90%;
      overflow-x: hidden;
      margin-top: 0;
      transform: translatey(-5%);
      line-height: 0%;
   }

   .desktopPassport::-webkit-scrollbar {
      width: 6px;
   }

   .desktopPassport:hover::-webkit-scrollbar {
      width: 6px;
   }

   .desktopPassport::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 50px;
   }

   .desktopPassport::-webkit-scrollbar-thumb {
      background-color: ${styles.colors.primary};
      border-radius: 50px;
   }

`;

