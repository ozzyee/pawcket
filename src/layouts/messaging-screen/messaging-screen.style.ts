import styled from "styled-components";
import styles from "../../styles/style.config.json";

export const MessagingScreenDiv = styled.div`
   /* border: 2px solid green; */
`;

export const MessagingBtn = styled.button`
   width: 3.5rem;
   height: 3.5rem;
   border-radius: 50%;
   border-color: transparent;
   background-color: ${styles.colors.primary};
   position: fixed;
   padding: 0.5rem;
   right: 1rem;
   bottom: 1rem;

   :active {
      transform: scale(0.95);
   }

   #icon {
      color: white;
   }
`;

export const InputAndBtnWrapper = styled.div`
   position: fixed;
   width: 100vw;
   height: 40px;
   left: 0;
   bottom: 0;
`;

export const MsgInput = styled.input`
   margin-left: 1rem;
   width: 70%;
`;

export const MsgSendBtn = styled.button`
   margin-left: 1rem;
`;

export const ChatMessagesArea = styled.div`
   bottom: 60px;
   width: 80%;
   max-height: 88%;
   overflow: scroll;
   position: fixed;
   transition: height 120ms;
   border: 1px solid red;
`;


export const MessagingArea = styled.div`
   margin-top: 25px;

   width: 100%;
   display: inline-block;
`;