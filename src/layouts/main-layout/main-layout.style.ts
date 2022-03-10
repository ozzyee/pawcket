import styled from "styled-components";
import styles from "../../styles/style.config.json";

export const Wrapper = styled.div`
   background-image: radial-gradient(#ffe5a5, #ffbf1f);
   height: 100%;
   min-height: 410px;
   width: 100vw;
   display: flex;
   flex-direction: column;
   position: relative;

   @media (min-width: ${styles.breakPoints.m}) {
      flex-direction: column-reverse;
      height: 100vh;
      background-image: radial-gradient(#ffe5a5, #ffbf1f);
   }
`;

export const Background = styled.div`
   width: 100%;
   height: 100%;
`;

export const CardDesktop = styled.div`
   position: absolute;
   width: 82%;
   max-width: 9000px;
   height: 91vh;
   max-height: 1000px;
   background-color: white;
   left: 0;
   right: 0;
   margin-left: auto;
   margin-right: auto;
   top: 0;
   border-bottom-left-radius: 22px;
   border-bottom-right-radius: 22px;
   box-shadow: 10px 10px 10px rgba(251, 133, 0, 0.7);
`;

export const MainLayout = styled.main`
   width: 100%;
   height: 30vh;
   min-height: 20em;

   background-image: url("/background-paws-1125x1218.svg");
   z-index: 10;
   display: flex;
   background-repeat: no-repeat;
   background-size: cover;

   @media (min-width: ${styles.breakPoints.m}) {
      position: absolute;
      background-image: url("/background-paws.svg");
      height: 100%;
      min-height: 0em;
   }
`;

export const BackgroundImage = styled.div`
   @media (min-width: ${styles.breakPoints.m}) {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      background-image: url("/background-paws.svg");
   }
`;

export const Top = styled.div`
   height: 30vh;
   min-height: 20em;

   max-width: 500px;
   width: 100%;

   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;

   margin-left: auto;
   margin-right: auto;
   margin-top: 0;
   position: relative;

   @media (min-width: ${styles.breakPoints.m}) {
      width: 82%;
      max-width: 9000px;
      height: 91vh;
      max-height: 1000px;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      border-radius: 0;
      border-bottom-left-radius: 22px;
      border-bottom-right-radius: 22px;
      background-color: white;
   }
`;

export const TapNavWrapper = styled.div`
   width: 100%;
   height: 28px;
   position: absolute;
   top: 0;
   position: absolute;
   z-index: 1;
`;

export const ImageWrapper = styled.div`
   border-radius: 50%;
   display: flex;
   //overflow: hidden;

   @media (min-width: ${styles.breakPoints.m}) {
      position: absolute;
      top: 2rem;
   }
`;

export const ImageHolder = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 160px;
   height: 160px;

   #frame {
      position: absolute;
      z-index: 1;
      width: 50%;
      height: 50%;
   }

   #img {
      z-index: 2;
      border-radius: 50%;
      width: 110px;
      height: 110px;
   }
`;

export const TextHolder = styled.div`
   width: 67%;
   height: 25%;
   text-align: center;
   margin-top: 10px;

   .heading-h1 {
      margin: 0;
      line-height: 105%;
   }

   @media (min-width: ${styles.breakPoints.m}) {
      position: absolute;
      .heading-h1 {
         color: black;
      }
      top: 12rem;
   }
`;

export const Card = styled.div`
   background-color: white;
   width: 100%;
   height: 100vh;
   z-index: 100;
   top: 0;

   position: relative;

   border-top-left-radius: 22px;
   border-top-right-radius: 22px;

   @media (min-width: ${styles.breakPoints.m}) {
      position: absolute;
      background-color: transparent;
      width: 82%;

      height: 50%;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      top: 13rem;
      bottom: 0;
      margin-top: auto;
      margin-bottom: auto;
      filter: drop-shadow(0px 0px 0px white);
   }
   /* filter: drop-shadow(0px -10px 10px ;
   box-shadow: 0px -10px 10px rgba(251, 133, 0, 0.7)); */
`;

export const Filter = styled.div`
   position: absolute;
   width: 100%;
   bottom: 0;
   height: 20%;
   box-shadow: 0px 0px 60px rgba(251, 133, 0, 1);
   border-top-left-radius: 22px;
   border-top-right-radius: 22px;
   @media (min-width: ${styles.breakPoints.m}) {
      display: none;
   }
`;

export const InnerCard = styled.div`
   height: 100%;
   display: block;

   border-top-left-radius: 22px;
   border-top-right-radius: 22px;
   background-color: white;

   @media (min-width: ${styles.breakPoints.m}) {
      height: 0;
   }
`;

export const TitleWrapper = styled.div`
   margin-top: 25px;
   width: 80%;
   text-align: center;

   margin-left: auto;
   margin-right: auto;

   .sub-heading-h2 {
      padding-bottom: 0;
      margin-bottom: 0;
   }

   .sub-heading-h3 {
      padding-top: 0;
      margin: 0;
   }
   border-bottom: 2px solid #ffbf1f;

   @media (min-width: ${styles.breakPoints.m}) {
      margin-top: 0;
   }
`;

export const MainContent = styled.main`
   background-color: white;
   padding: 1.5em;
   height: 72%;
   height: 50vh;

   @media (min-width: ${styles.breakPoints.m}) {
      position: absolute;
      width: 90%;
      height: 70%;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      background-color: transparent;
      margin-top: 20px;
   }
`;
