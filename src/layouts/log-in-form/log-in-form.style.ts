import styled from "styled-components";
import styles from "../../styles/style.config.json";

export const LoginForm= styled.form`
   display: flex;
   flex-direction: column;
   width: 300px;

   .input {
      margin-bottom: 40px;
   }

   .login-btn {
      height: 30px;
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
`;

export const AuthLoginWrapper = styled.div`
   padding-top: 2rem;
   display: flex;
   align-items: center;
   justify-content: center;
`;
