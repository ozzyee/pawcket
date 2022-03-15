import styled from "styled-components";
import styles from "../../styles/style.config.json";

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
export const TextHolder = styled.div``;

export const CreatePetFormDiv = styled.div``;

export const CreatePetForm = styled.form`
   height: 75vh;
   width: 100%;
   /* overflow: scroll; */
`;

export const CreatePetSpan = styled.span``;

export const DesktopTitle = styled.div`
   display: none;
   @media (min-width: ${styles.breakPoints.m}) {
      border-bottom: 2px solid ${styles.colors.primary};
      text-align: center;
      display: block;

      .desktop-title {
         padding: 0;
         margin: 0;
         font-size: 1.6rem;
      }
   }
`;

export const FormSplitRight = styled.div`
   @media (min-width: ${styles.breakPoints.m}) {
      position: absolute;
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
   position: relative;
`;

export const ButtonWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   display: none;

   /* .form-btn {
      left: 0;
      right: 0;
      margin: 0;
      padding: 0;

      position: relative;
      width: 85%;
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
   } */
   @media (min-width: ${styles.breakPoints.m}) {
      display: flex;
   }
`;

export const FormSplitLeft = styled.div`
   @media (min-width: ${styles.breakPoints.m}) {
      position: absolute;
      width: 50%;
      height: 100%;
      padding: 0 6rem;

      display: flex;
      align-items: center;
      justify-content: center;
   }
`;
