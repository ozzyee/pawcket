import styled from "styled-components";
import styles from "../../styles/style.config.json";

export const SignUpForm = styled.form`
   display: flex;
   flex-direction: column;
   margin-top: 3rem;

   .input {
      margin-bottom: 3rem;
   }
   .login-btn {
      margin-top: 0.5rem;
      height: 40px;
      width: 90%;
      font-size: 1.1rem;
      font-weight: normal;
      color: white;
      border-radius: 50px;
      margin-left: auto;
      margin-right: auto;

      :hover {
         color: ${styles.colors.primary};
      }
   }

   @media (min-width: ${styles.breakPoints.m}) {
   margin-top: 2rem;

      .login-btn {
         margin-top: 0;
         height: 30px;
         width: 200px;
      }

       .input {
      margin-bottom: 2rem;
   }
   }
`;

export const AuthLoginWrapper = styled.div`
   padding-top: 2rem;
   display: flex;
   align-items: center;
   justify-content: center;
`;
