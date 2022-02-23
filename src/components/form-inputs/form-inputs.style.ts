import styled from "styled-components";
import styles from "../../styles/style.config.json";

export const TextArea = styled.textarea`
   @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap");
   font-family: "Poppins", sans-serif;
   font-size: 1em;
   width: 100%;
   height: 120px;
   margin: 0 0 10px 0;
   border: 1px solid rgba(14, 23, 27, 0.4);
   padding: 5px;
   font-size: 1em;

    ::placeholder {
        font-size: 0.9em;
        font-weight: 300;
        color: rgba(14, 23, 27, 0.4);
        position: absolute;
        bottom: 0;
    }
`;

export const Input = styled.input`
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
`;
