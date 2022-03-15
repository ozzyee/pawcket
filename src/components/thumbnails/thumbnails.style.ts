import styled from "styled-components";
import styles from "../../styles/style.config.json";
import { TThumbnailsProps } from "./thumbnails.definition";

export const Thumbnails = styled.div<TThumbnailsProps>`
   width: 100%;
   height: 100%;
   margin: 10% 10%;
   margin-bottom: 10vh;
   display: grid;
   grid-template-columns: repeat(1, 80%);
   grid-auto-rows: 150px;
   place-items: center;

   Button {
      grid-column: unset;
      width: 100px;
      height: 100px;
      border-radius: 100%;
   }

   @media (min-width: ${styles.breakPoints.m}) {
      margin: 0;
      .petPic::after {
         visibility: hidden;
         position: relative;
         top: -110%;
         width: 100%;
         height: 100%;
         border-radius: 100px;
         color: white;
         background-color: rgba(255, 255, 255, 0.1);
         backdrop-filter: blur(10px);
         display: grid;
         place-content: center;
      }

      .petPic:hover::after {
         visibility: visible;
      }

      .centeredButton {
         grid-column: span 3;
      }
   }
`;

export const DefaultText = styled.div`
   color: rgba(14, 23, 27, 0.2);
   width: 100%;
   height: 100%;
   text-align: center;
   overflow-wrap: break-word;
   display: grid;
   place-items: center;
   justify-content: center;

   Button {
      grid-column: unset;
      width: 100px;
      height: 100px;
      border-radius: 100%;
   }

   .wrapped {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
`;
