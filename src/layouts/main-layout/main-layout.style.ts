import styled from "styled-components";
import styles from "../../styles/style.config.json";

export const MainLayout = styled.main`
   background-color: ${styles.colors.primary};
   padding: 0;
   margin: 0;
   with: 100%;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   position: relative;

   background-image: url("/background-paws.svg");
`;

export const Top = styled.div`
   height: 35%;
   max-width: 400px;
   width: 60%;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   position: relative;
   z-index: 1;
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
   overflow: hidden;
`;

export const ImageHolder = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   position: relative;
   width: 160px;
   height: 160px;

   #frame {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
   }

   #img {
      z-index: 2;
      border-radius: 50%;
      width: 110px;
      height: 110px;
   }
`;

export const TextHolder = styled.div`
   width: 75%;
   height: 25%;
   text-align: center;

   .heading-h1 {
      margin: 0;
   }
`;

export const Card = styled.div`
   background-color: white;
   width: 100%;
   height: 60%;
   border-top-left-radius: 22px;
   border-top-right-radius: 22px;
   position: relative;
   z-index: 1;
   filter: drop-shadow(0px -10px 10px rgba(251, 133, 0, 0.6));
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
      margin-top: 0;
   }
`;

export const MainContent = styled.main`
   display: block;
   margin-top: 20px;
   background-color: white;
   padding: 1.5em;
`;
