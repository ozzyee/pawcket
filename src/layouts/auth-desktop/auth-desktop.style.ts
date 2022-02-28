import styled from "styled-components";
import styles from "../../styles/style.config.json";

export const AuthDesktopDiv = styled.main`
   background-image: linear-gradient(#ffbf1f, #ffbf1f);
   width: 100vw;
   height: 100vh;
`;

export const Background = styled.div`
   background-image: url("/background-paws.svg");
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const LogoAndNameWrapper = styled.div`
   width: 50%;
   height: 100%;

   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;

   #logo {
      width: 180px;
   }
`;

export const FormModal = styled.div`
   width: 50%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`;

export const Modal = styled.div`
   background-color: white;
   width: 450px;
   height: 500px;
   margin-right: 40px;
   border-radius: 11px;
   position: relative;
   filter: drop-shadow(5px 12px 15px rgba(251, 133, 0, 1));

   .h2-login {
      font-size: 1.8rem;
      padding: 0;
      margin: 0;
      margin-top: 30px;
   }

   .h3-login {
      padding: 0;
      margin: 0;
      margin-top: 10px;
      font-weight: 300;
      text-align: center;
   }

   .footer-text {
      padding: 0;
      position: absolute;
      bottom: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${styles.colors.blue};
   }
   .plain-text {
      color: black;
   }
`;

export const TextHolder = styled.div`
   border-bottom: 2px solid ${styles.colors.primary};
   width: 80%;
   margin-left: auto;
   margin-right: auto;
   text-align: center;
`;

export const FormHolder = styled.div`
   height: 60%;
   width: 75%;
   margin-left: auto;
   margin-right: auto;
`;
