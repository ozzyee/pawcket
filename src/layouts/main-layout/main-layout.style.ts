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
`;

export const Top = styled.div`
   height: 40%;
   max-width: 300px;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`;

export const TapNavWrapper = styled.div`
   width: 100%;
   height: 28px;
   position: absolute;
   top: 0;
`;

export const ImageWrapper = styled.div`
   border-radius: 50%;
   display: flex;
   overflow: hidden;
`;

export const TextHolder = styled.div`
   width: 75%;
   height: 25%;
   margin-top: 10px;
   text-align: center;
`;

export const Card = styled.div`
   background-color: white;
   width: 100%;
   height: 60%;
   border-top-left-radius: 22px;
   border-top-right-radius: 22px;
`;

export const TitleWrapper = styled.div`
   margin-top: 25px;
   width: 80%;
   text-align: center;
   margin-left: auto;
   margin-right: auto;
`;

export const MainContent = styled.main`
   display: block;
   margin-top: 20px;
   background-color: white;
   padding: 1.5em;
`;
