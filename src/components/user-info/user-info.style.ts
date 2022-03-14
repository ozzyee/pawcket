import { TUserInfoProps } from "./user-info.definition";
import styled from "styled-components";
import styles from "../../styles/style.config.json"

export const UserInfo = styled.div`
    line-height: 70%;
    color: ${styles.colors.black};
    margin-bottom: 50px;
    padding: 0 5%;

    

   .bio {
      text-align: center;
      font-size: 1.2rem;
      line-height: 110%;
   }
   .placeholder {
      color: rgba(14, 23, 27, 0.5);
   }
`
