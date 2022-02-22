import styled from "styled-components";
import styles from "../../styles/style.config.json";

export const AuthLoginDiv = styled.div`
   width: 80%;
   border-top: 1px solid ${styles.colors.primary};
`;

export const TextHolder = styled.div`
   @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap");
   font-family: "Poppins", sans-serif;

   display: block;
   width: 30px;
   text-align: center;
   font-size: 0.9rem;
   color: ${styles.colors.primary};
   margin-top: -12px;
   margin-left: auto;
   margin-right: auto;
   background-color: white;
`;

export const AuthIcons = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const GoogleIcon = styled.div`
   width: 52px;
   height: 52px;
   background-repeat: no-repeat;
   background-image: url("/google-icon.svg");
   border-color: transparent;
   background-color: transparent;
   display: flex;
   align-items: center;
   justify-content: center;
`;
export const FacebookIcon = styled.div`
   width: 35px;
   height: 35px;
   /* background-repeat: no-repeat; */
   background-image: url("/facebook-icon.svg");
   border-color: transparent;
   background-color: transparent;
   display: flex;
   align-items: center;
   justify-content: center;
   background-repeat: no-repeat;
`;

export const Button = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: transparent;
   border-color: transparent;
   padding: 0;
   margin: 0;
`;
