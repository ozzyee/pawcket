import styled from "styled-components";
import { TCreateProfileProps } from "./create-profiles.definition";
import styles from "../../styles/style.config.json";

export const CrossFrame = styled.span<TCreateProfileProps>`
   width: 150px;
   height: 150px;
   /* background-color: red; */
   background: url("/frame.svg");
   background-size: contain;
   background-position: center;
   background-repeat: no-repeat;
   overflow: hidden;
   display: flex;
   justify-content: center;
   align-items: center;
   filter: drop-shadow(10px 10px 10px rgba(207, 92, 54, 0.8));

   ::after {
      content: ${(props) => props.foreground};
      position: absolute;
      font-weight: 100;
      font-size: 8em;
      color: white;
   }
`;
//* NOTE may need this *//
//   ${(props) =>
//       props.width && {
//          width: props.width,
//       }}
//    ${(props) =>
//       props.height && {
//          height: props.height,
//       }}

export const DesktopTitle = styled.div`
   display: none;
   @media (min-width: ${styles.breakPoints.m}) {
      border-bottom: 2px solid ${styles.colors.primary};
      margin-bottom: 20px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;

      .desktop-title {
         padding: 0;
         margin: 0;
         font-size: 1.6rem;
      }
   }
`;

export const CreateUserForm = styled.form`
   height: 100%;
   @media (min-width: ${styles.breakPoints.m}) {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
   }
`;

export const CreateUserSpan = styled.span`
   width: 100%;
`;

export const ButtonsWrapper = styled.div`
   width: 100%;
   margin: 20px 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

export const SkipStyleButton = styled.a`
   font-family: "Poppins", sans-serif;
   font-size: 1.1em;
   text-decoration: underline;
   color: white;
   position: absolute;
   top: -300px;
   right: 30px;
`;

export const FormSplitLeft = styled.div`
   @media (min-width: ${styles.breakPoints.m}) {
      /* position: absolute; */
      width: 50%;
      height: 100%;
      padding: 0 6rem;

      display: flex;
      align-items: center;
      justify-content: center;
   }
`;

export const FormSplitRight = styled.div`
   @media (min-width: ${styles.breakPoints.m}) {
      /* position: absolute; */
      right: 0;
      width: 50%;
      height: 100%;
      padding: 0 6rem;

      display: flex;
      align-items: center;
      justify-content: center;
   }
`;

export const Wrapper = styled.div`
   width: 100%;
   /* border: 2px solid red; */

   @media (min-width: ${styles.breakPoints.m}) {
      /* height: 100%; */
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      

      &#form-right {
         margin-top: -1.8em;
      }

      .text-area {
         min-height: 156px;
      }
   }
`;

export const TextHolder = styled.div``;

export const ImageAndTextWrapper = styled.div`
   display: none;
   @media (min-width: ${styles.breakPoints.m}) {
      height: 220px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .sub-heading-h2-upload {
         margin: 0;
         padding: 0;
         font-weight: 500;
      }
      .sub-heading-h2-img {
         margin: 0;
         margin-top: -0.5rem;
         font-weight: 500;
         text-align: right;
      }
   }
`;
