import styled from "styled-components";
import styles from "../../styles/style.config.json";

export const FriendsModalDiv = styled.div`
   width: 200px;
   height: 220px;
   border-radius: 22px;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   position: relative;

   margin: 0.6rem;
`;

export const ImageWrapper = styled.div`
   height: 65%;
   min-height: 120px;

   display: flex;
   align-items: center;
   justify-content: center;
`;

export const LeftButton = styled.button`
   border-color: transparent;
   background-color: ${styles.colors.primary};
   position: absolute;
   height: 42px;
   width: 42px;
   border-radius: 50%;
   padding: 7px;
   bottom: 38%;
   left: 16%;
   z-index: 1000;
   transition: all 80ms;

   .friend-icon {
      color: white;
   }

   :hover {
      background-color: white;
      border: 2px solid ${styles.colors.primary};
      padding: 6px;

      .friend-icon {
         color: ${styles.colors.primary};
      }
   }

   :active {
      transform: scale(0.92);
   }
`;

export const RightBtn = styled.button`
   border-color: transparent;
   background-color: ${styles.colors.primary};
   position: absolute;
   height: 42px;
   width: 42px;
   border-radius: 50%;
   padding: 7px;
   bottom: 38%;
   right: 16%;
   z-index: 1000;
   transition: all 80ms;

   .friend-icon {
      color: white;
   }

   :hover {
      background-color: white;
      border: 2px solid ${styles.colors.primary};
      padding: 6px;

      .friend-icon {
         color: ${styles.colors.primary};
      }
   }

   :active {
      transform: scale(0.92);
   }
`;

export const RejectBtn = styled.button`
   border-color: transparent;
   background-color: ${styles.colors.primary};
   /* position: absolute; */
   height: 42px;
   width: 42px;
   border-radius: 50%;
   padding: 7px;
   bottom: 38%;
   left: 16%;
   z-index: 1000;
   transition: all 80ms;

   .friend-icon {
      color: white;
   }

   :hover {
      background-color: white;
      border: 2px solid ${styles.colors.primary};
      padding: 6px;

      .friend-icon {
         color: ${styles.colors.primary};
      }
   }

   :active {
      transform: scale(0.92);
   }
`;

export const Image = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
   overflow: hidden;
`;

export const UserNameWrapper = styled.div`
   height: 35%;
   padding: 0 14px;

   display: flex;
   justify-content: center;
   flex-direction: column;

   .status-text {
      font-size: 0.84rem;
      padding: 0;
      margin: 0;
      color: gray;
   }

   .name-text {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 0.98rem;

      color: black;
      padding: 0;
      margin: 0;
   }
`;
