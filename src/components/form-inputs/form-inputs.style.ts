import styled from "styled-components";
import styles from "../../styles/style.config.json";

export const InputWrapper = styled.div`
   margin-top: 0.8rem;

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

export const TextArea = styled.textarea`
   width: 600px;
   height: 120px;
   border: 3px solid ${styles.colors.black};
   padding: 5px;
   font-size: 1em;
   opacity: 0.7;
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
   margin: 0;
   padding: 0;
   padding-left: 0.5rem;
   font-size: 0.7rem;
   color: red;
`;
