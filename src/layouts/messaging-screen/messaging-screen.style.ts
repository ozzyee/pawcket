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
   bottom: 0px;
   padding: 0 2rem;
   align-items: center;
   justify-content: center;
`;

export const MsgInput = styled.input`
   height: 1.8rem;
   width: 70%;
   border-radius: 22px;
   padding: 0 1rem;
   border: 2px solid ${styles.colors.primary};
   :focus {
      outline-width: 0;
   }
`;

export const MsgSendBtn = styled.button`
   background-color: transparent;
   border-color: transparent;
   #send-icon {
      width: 1.8rem;
      margin-top: -5px;
      color: ${styles.colors.primary};
      :active {
         transform: scale(0.9);
      }
   }
`;

export const ChatMessagesArea = styled.div`
   bottom: 60px;
   width: 80%;
   max-height: 60%;
   overflow: scroll;
   position: fixed;
   transition: height 120ms;
   width: 100%;
   left: 0;
   padding: 0 2rem;
`;

export const MessagingArea = styled.div`
   margin-top: 25px;

   width: 100%;
   display: inline-block;
`;

export const usersMessages = styled.div`
   border: 2px solid transparent;
   position: relative;
   margin-top: 0;
`;

export const ImagesToSend = styled.div`
   height: 80px;
   border: 2px solid transparent;
   position: absolute;
   width: 88%;
   bottom: 3rem;
`;


