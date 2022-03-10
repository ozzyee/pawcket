import styled from "styled-components";
import styles from "../../styles/style.config.json";

export const Wrapper = styled.div`
   position: relative;
   width: 280px;
   padding-left: 3%;
   padding-right: 3%;
`;

export const VetsInfoDiv = styled.div`
   width: 100%;
   background-color: #e6f4f8;
   border-radius: 22px;
   padding: 10px;
   padding-top: 40px;
   padding-bottom: 20px;
   box-shadow: 5px 5px 5px rgba(14, 23, 27, 0.4);
   margin-bottom: 20px;

   /* @media (min-width: ${styles.breakPoints.m}) {
      display: grid;
      grid-template-columns: repeat(3, 300px);
   } */
`;

export const VetsLogoHolder = styled.div`
   border: 1px solid ${styles.colors.blue};
   width: 60px;
   height: 60px;
   border-radius: 50%;
   background-color: white;
   z-index: 1;
   position: relative;
   margin-left: auto;
   margin-right: auto;
   margin-bottom: -30px;
`;

export const VetsInfo = styled.div`
   width: 90%;

   .vet-name {
      padding: 0;
      margin: 0;
      margin-bottom: 10px;
      font-weight: bold;
      color: black;
      font-style: italic;
   }
`;

export const TextHolder = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0;
   margin: 0;
   margin-top: 0rem;

   z-index: 1000;

   right: 0;
   left: 0;

   .bold {
      font-weight: bold;
      padding-right: 5px;
   }

   .contact-info {
      font-size: 0.8rem;
      margin: 0;
      margin-top: 4px;
   }
`;
