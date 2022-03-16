import styled, { createGlobalStyle } from "styled-components";
import styles from "./style.config.json";

export const GlobalStyle = createGlobalStyle`
    html,
    body {
    padding: 0 ;
    margin: 0 ;
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
    overflow: visible;
}
   .logo{
       width:10rem;
   }

   .desktop-display-block{
         display: none !important;
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
   .css-1480iag-MuiInputBase-root-MuiInput-root:after {
      border-color: ${styles.colors.primary};
   }

   .messaging{
     height : 75vh;
     margin-top:-15vh ;
     /* position: fixed ; */
     .kQdQMS{
         border:2px solid transparent;
      }
   }

   .msg-name{
      color: white;
      font-weight:400 ;
      margin-left:1rem
   }

   #mobile-wrapper{
      position:absolute;
      left: 0;
      width: 100vw;
      padding:0 0.5rem;
      background-color:white ;
   }

   .extra-padding{
      padding:0 2rem !important;
   }

   .nav {
      width: 100vw;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 2;
   }


   .nav-desktop{
width: 50%;
float: right;
border-radius: 0px 0px 0px 50px;
   }
   .img-holder{
      overflow: hidden;
      width:60px;
      height:60px;
      border-radius:50%;

   }
   .auth-btn-1{
      border: solid red 10px;
      margin-top: 2rem ;
      height: 34px !important;;
      width: 90% !important;;
      font-size: 1.1rem !important;;
      font-weight: normal !important;;
      color: white !important;;
      border-radius: 50px !important;;
      margin-left: auto !important;
      margin-right: auto !important;
   }

   #auth-btn{
      margin-top: 2rem ;
      height: 34px;
      width: 90%;
      font-size: 1.1rem;
      font-weight: normal;
      color: white;
      border-radius: 50px;
      margin-left: auto !important;
      margin-right: auto !important;

      :hover {
         color: ${styles.colors.primary};
      }
   }

   .css-1x51dt5-MuiInputBase-input-MuiInput-input{
      padding-left:.5rem;
   }

   .friends-section{
      margin-top: -20vh;
      .kQdQMS{
         border:2px solid transparent;
      }
   }



   @media (min-width: ${styles.breakPoints.m}) {
      .css-1x51dt5-MuiInputBase-input-MuiInput-input{
      padding-left:.5rem !important;
   }

      .desktop-display-none{
         display: none !important;
      }
      .desktop-display-block{
         display: block !important;
      }

      .auth-btn {
         margin-top: 30px;
         height: 30px;
         width: 200px;
      }

      #auth-btn {
     left:0 ;
     right:0 ;
         position: relative;
         width: 200px ;
         height: 30px;
         font-size: 1.1rem ;
         top: 1.5rem;
         bottom: 1.5rem;
         margin: 0;
         margin-left: 0.5rem ;
         margin-right: 0.5em;
         border-radius: 22px;
         box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
         margin-left:auto ;
         margin-right:auto ;
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
      margin-top: 15px;
      margin-bottom: 15px;
   }
   .create-profile-btn {
      align-self: center;
   }

   @media (min-width: ${styles.breakPoints.m}) {
      height: 60%;
      flex-direction: row;

      .desktop-display-none {
         display: none;
      }

      .login-btn {
         height: 40px;
         border-radius: 22px;
         margin-right: 10px;
         margin-left: 10px;
      }
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
   position: absolute;

   right: 0;
   left: 0;

   &.landing {
      position: absolute;
      bottom: 0;
   }

   &.auth-screen {
      /* margin-top: 10px !important; */
      display: flex;
      align-items: center;
      justify-content: center;
   }

   &.margin-top {
      margin-top: 0;
      color: ${styles.colors.blue};
   }

   &.login {
      margin-top: 25px;
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

export const AuthLoginWrapper = styled.div`
   padding-top: 2.5rem;
   display: flex;
   align-items: center;
   justify-content: center;

   @media (min-width: ${styles.breakPoints.m}) {
      padding-top: 3rem;
   }
`;

export const ButtonsWrapper = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding-bottom: 1.5rem;

   &.create-users-forms {
      margin-top: 0.6rem !important;
   }

   .form-btn {
      left: 0;
      right: 0;
      margin: 0;
      padding: 0;

      position: relative;
      width: 90%;
      height: 36px;
      font-size: 1.1rem;
      top: 0.5rem;
      bottom: 1.5rem;
      border-radius: 22px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
   }

   &#create-pet-btns {
      /* border: 2px solid green; */
      width: 50%;
      position: absolute;
      bottom: 0;
   }
   @media (min-width: ${styles.breakPoints.m}) {
      &#display-none {
         display: none;
      }
   }
`;

export const FriendsPageWrapper = styled.main`
   display: flex;
   /* align-items: center; */
   flex-wrap: wrap;

   width: 885px;
   height: 500px;
   margin-top: 2.5rem;
   overflow: scroll;

   margin-left: auto;
   margin-right: auto;
`;

export const FriendsTitleWrapper = styled.div`
   width: 100vw;
   position: absolute;
   top: 0;
   left: 0;
   height: 60%;

   display: flex;
   align-items: center;
   justify-content: center;
`;

export const MobileFriendsWrapper = styled.div`
   position: absolute;
   left: 0;
   padding: 1rem;
   margin-top: -3rem;
   height: 100vh;
   width: 100vw;
   background-color: white;
   overflow: none;
   border-radius: 22px;

   #friends-wrapper {
      margin-top: 2rem;
      /* border: 2px solid green; */
   }

   #friends {
      height: 85%;
      overflow: scroll;
      margin-top: 1rem;
      margin-bottom: 1rem;
   }
`;

export const BackButton = styled.button`
   position: absolute;
   left: 1.4rem;
   top: 1.4rem;
   width: 2.8rem;
   height: 2.8rem;
   border-radius: 50%;
   background-color: ${styles.colors.orange};
   border: 2px solid ${styles.colors.orange};

   :active {
      transform: scale(0.95);
   }

   #back-btn {
      color: white;
   }
`;
