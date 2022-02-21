import styled from "styled-components";
import styles from "../../styles/style.config.json";

export const TextArea = styled.textarea`
   width: 600px;
   height: 120px;
   border: 3px solid ${styles.colors.black};
   padding: 5px;
   font-size: 1em;
   opacity: 0.7;
`;

export const Input = styled.input`
   font-size: 1em;
   outline: 0;
   border-width: 0 0 2px;
   border-color: grey;
`;
