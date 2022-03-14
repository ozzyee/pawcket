import styled from "styled-components";

type TStyle = {
   color: string;
   float: string;
};

export const MessageDiv = styled.div`
   width: 90%;
   float: ${({ float }: { float: string }) => float};
`;
export const MessageWrapper = styled.div<TStyle>`
   display: block;
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;

   background-color: ${({ color }) => color};
   padding: 8px 12px;
   display: inline-block;
   border-radius: 22px;
   display: block;
   padding: 8px 12px;
   display: inline-block;
   border-radius: 22px;
   float: right;
   max-width: 90%;
   display: inline-block;
   float: ${({ float }) => float};
`;

export const Message = styled.p`
   overflow-wrap: break-word;

   padding: 0;
   margin: 0;
   font-size: 15px;
   line-height: 18px;
   white-space: pre-wrap;
   unicode-bidi: isolate;
   font-weight: 300;
   color: ${({ color }: { color: string }) => color};
`;

export const ResponseBubble = styled.div`
   width: 90%;
   float: left;
   position: relative;

   .half.light .typing {
      background-color: #e0e0e0;
   }
   .half.dark {
      background-color: #262626;
   }
   .half.dark .typing {
      background-color: #525252;
   }

   .typing {
      display: block;
      width: 60px;
      height: 34px;
      border-radius: 20px;

      display: flex;
      justify-content: center;
      align-items: center;
   }

   .circle {
      display: block;
      height: 7px;
      width: 7px;
      border-radius: 50%;
      background-color: #8d8d8d;
      margin: 3px;
   }
   .circle.scaling {
      animation: typing 1000ms ease-in-out infinite;
      animation-delay: 3600ms;
   }
   .circle.bouncing {
      animation: bounce 1000ms ease-in-out infinite;
      animation-delay: 3600ms;
   }

   .circle:nth-child(1) {
      animation-delay: 0ms;
   }

   .circle:nth-child(2) {
      animation-delay: 333ms;
   }

   .circle:nth-child(3) {
      animation-delay: 666ms;
   }

   @keyframes typing {
      0% {
         transform: scale(1);
      }
      33% {
         transform: scale(1);
      }
      50% {
         transform: scale(1.4);
      }
      100% {
         transform: scale(1);
      }
   }
`;
