import styled from "styled-components";
import styles from "../../styles/style.config.json";
import { TGlowingLine } from "./separator.definition";

export const GlowingLine = styled.div<TGlowingLine>`
   display: grid;
   place-items: center;
   margin-top: 15px;
   ::before {
      content: "";
      position: relative;
      display: block;
      width: 100%;
      height: 1px;
      background-color: ${styles.colors.primary};
      box-shadow: 0 4px 4px rgba(255, 191, 31, 0.7);
   }
   ::after {
      @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap");
      font-family: "Poppins", sans-serif;
      font-weight: 300;
      padding: 0 7px 0 7px;
      content: "${(props) => props.separatorText}";
      transform: translateY(-55%);
      background-color: white;
      color: ${styles.colors.primary};
      display: block;
   }

   @media (min-width: ${styles.breakPoints.m}) {
      display: none;
   }
`;
