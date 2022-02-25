import styled from "styled-components";
import styles from "../../styles/style.config.json";

export const LoginForm = styled.form`
   display: flex;
   flex-direction: column;
   width: 100%;
   background-color: white;

   .input {
      margin-bottom: 3rem;
   }

   @media (min-width: ${styles.breakPoints.m}) {
      margin-top: 1.4rem;
   }
`;
