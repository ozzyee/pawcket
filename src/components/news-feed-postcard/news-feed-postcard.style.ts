import styled from "styled-components";
import styles from "../../styles/style.config.json";

export const Wrapper = styled.div`
   position: relative;
   width: 100vw;
`;

export const CardInfoDiv = styled.div`
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

export const CardLogoHolder = styled.div`
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

export const CardInfo = styled.div`
   width: 90%;
   /* display: flex;
   justify-content: center;
   flex-wrap: wrap; */
`;

export const TextHolder = styled.div`
   padding: 5px;
   margin: 0;
   margin-top: 0rem;
   overflow: none;
   z-index: 1;
   position: relative;
   right: auto;
   left: 6%;
   background-color: #ffffff;
   border-radius: 0% 20% 20% 20%;

   .bold {
      font-weight: bold;
      padding-right: 5px;
   }

   .postText {
      font-size: 0.2rem;
      margin: 0;
      margin-top: 4px;
      justify-self: center;
      background-color: green;
   }
`;

export const UserNameWrapper = styled.div`
   display: flex;
   justify-content: center;
   z-index: 5;
   border: 2px red solid;
`;
