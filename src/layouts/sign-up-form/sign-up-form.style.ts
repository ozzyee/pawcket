import styled from "styled-components";
import styles from "../../styles/style.config.json";

export const SignUpForm = styled.form`
   display: flex;
   flex-direction: column;

   .input {
      margin-bottom: 3rem;
   }


   @media (min-width: ${styles.breakPoints.m}) {
      margin-top: 0;
      margin-top: 0rem;

      .input-confirm {
         position: relative;
      }

      .input {
         margin-bottom: 2rem;
      }
   }
`;

