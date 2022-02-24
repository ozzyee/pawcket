import styled, { createGlobalStyle } from "styled-components";
import styles from "./style.config.json";

export const GlobalStyle = createGlobalStyle`
    html,
    body {
    padding: 0 ;
    margin: 0 ;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    * {
    box-sizing: border-box;
    }
    
   .logo{
       width:10rem;     
   }

   .desktop-display-block{
         display: none ;
   }
   
   .nco-banner __bm__extension{
    display: none;
   }

   .login-form{

      width: 100%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 0;
   }

   @media (min-width: ${styles.breakPoints.m}) {
      .desktop-display-none{
         display: none !important;
      }
      .desktop-display-block{
         display: block ;
      }
   }

`;

export const StoryLayout = styled.div`
   display: flex;
   align-items: left;
   flex-direction: column;
`;

export const LandingPage = styled.main`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   height: 75%;

   .login-btn {
      width: 86%;
      height: 65px;
      margin-top: 2rem;
      font-size: 1.8rem;
   }

   @media (min-width: ${styles.breakPoints.m}) {
      height: 100%;
      flex-direction: row;
      .login-btn {
         width: 200px;
         height: 35px;
         margin-top: 2rem;
         font-size: 1.4rem;
         margin: 0;
         margin-left: 0.5rem;
         margin-right: 0.5em;
         margin-top: -2.5rem;
         border-radius: 22px;
         box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }

      .desktop-display-none {
         display: none;
      }
   }
`;

export const TextHolder = styled.div`
   display: flex;
   align-items: center;
   padding: 0;
   margin: 0;

   &.auth-screen {
      /* margin-top: 10px !important; */
      display: flex;
      align-items: center;
      justify-content: center;
   }

   &.margin-top {
      margin-top: 25px;
      color: ${styles.colors.blue};
   }

   .bold {
      font-weight: bold;
      padding-right: 5px;
   }

   .contact-info {
      font-size: 0.8rem;
      margin: 0;
      margin-top: 4px;
   }

   .landing-text {
      margin-left: 6px;
      font-size: 1.1rem;
      font-style: italic;
   }

   @media (min-width: ${styles.breakPoints.m}) {
      &.margin-top {
         position: absolute;
         bottom: 0;
      }
   }
`;

export const AuthScreen = styled.main`
   width: 100%;
   left: 0;
   background-color: white;
   position: relative;
   margin-top: auto;
`;
