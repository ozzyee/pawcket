import styled from "styled-components";
import styles from "../../styles/style.config.json";
import { TErrorStyle } from "./form-inputs.definition";

export const InputWrapper = styled.div`
   margin-top: 0.8rem;
   width: 100%;

   .input-width {
      width: 100%;
   }

   .label {
      padding-left: 0.5rem;
      @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap");
      font-family: "Poppins", sans-serif;
      color: black;
      font-size: 0.9em;
      bottom: 0;
      font-weight: 300;
   }
   #input {
      padding-left: 0.5rem;
      @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap");
      font-family: "Poppins", sans-serif;
      font-size: 1em;
      font-weight: 300;
      border-color: grey;
   }


`;

export const DateInputWrapper = styled.div<TErrorStyle>`
   margin-top: 1.2rem;

   .MuiFormControl-root {
      width: 100%;
   }

   .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
      @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap");
      font-family: "Poppins", sans-serif;
      font-size: 0.9em;
      color: black;
      font-weight: 300 !important;
      padding-bottom: 20px;
      left: -7px;
   }
   .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root {
      @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap");
      font-family: "Poppins", sans-serif;
      font-weight: 300 !important;

      color: black;
      left: -6px;
   }

   .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
      padding: 15.5px 0 4px 10px;
   }

   @media (min-width: ${styles.breakPoints.m}) {
      .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
         padding: 16.5px 14px;
      }

    
   }

   .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input {
      padding: 14px 12px 4px 9px;
      @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap");
      font-family: "Poppins", sans-serif;
      font-size: 1em;
      font-weight: 300;
      letter-spacing: 0.231;
   }

   #mui-11 {
      border: 0 solid;
   }

   fieldset {
      border: 0 solid !important;
      border-bottom: ${({ styleError }) => styleError} !important;

      width: 100%;
      border-radius: 0;
   }
`;

export const TextArea = styled.textarea`
   @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap");
   font-family: "Poppins", sans-serif;
   font-size: 1em;
   width: 100%;
   max-width: 100%;
   min-height: 120px;
   max-height: 120px;
   margin: 0 0 10px 0;
   border: 1px solid rgba(14, 23, 27, 0.4);
   padding: 5px;
   font-size: 1em;
   resize: none;
   margin-top: 2rem;

   ::placeholder {
      font-size: 0.9em;
      font-weight: 300;
      color: rgba(14, 23, 27, 0.4);
      position: absolute;
      bottom: 0;
   }

   :focus {
      outline: none !important;
      border: 1px solid ${styles.colors.primary};
   }
`;

export const RequiredSymboled = styled.div`
   position: absolute;

   top: 0.5rem;
   /* height: 1.4rem; */
   display: flex;
   align-items: center;
   color: red;
`;

export const ErrorMessage = styled.p`
   @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap");
   font-family: "Poppins", sans-serif;

   font-size: 1em;
   width: 100%;
   height: 4vh;
   margin: 0 0 20px 0;
   outline: 0;
   border-width: 0 0 2px;
   border-color: rgba(14, 23, 27, 0.4);
   border-bottom: 1px solid grey;
   padding-left: 0.5rem;

   ::placeholder {
      font-size: 0.9em;
      font-weight: 300;
      color: rgba(14, 23, 27, 0.4);
      position: absolute;
      bottom: 0;
   }

   margin: 0;
   padding: 0;
   padding-left: 0.5rem;
   font-size: 0.7rem;
   color: red;
   `;

   export const FormSelect = styled.select`

   `
