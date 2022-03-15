import styled from "styled-components";

export const ButtonsDiv = styled.button`
   background-color: ${({ theme }) => theme.backgroundColor};
   width: ${({ theme }) => theme.width}px;
   height: ${({ theme }) => theme.height}px;
   border-color: transparent;
   border-radius: ${({ theme }) => theme.borderRadius}px;
   color: white;
   font-size: ${({ theme }) => theme.fontSize}rem;
   margin-top: 10px;

   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   font-weight: bold;
   font-style: italic;
   color: ${({ theme }) => theme.fontColor};

   :hover {
      background-color: transparent;
      color: ${({ theme }) => theme.backgroundColor};
      border: 2px solid ${({ theme }) => theme.backgroundColor};
      transition: all 50ms;
   }

   :active {
      transform: scale(0.95);
   }

   &#form-btn {
      left: 0;
      right: 0;
      margin: 0;
      padding: 0;

      position: relative;
      width: 90%;
      height: 36px;
      font-size: 1.1rem;
      top: 0.5rem;
      bottom: 1.5rem;
      border-radius: 22px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
   }
`;

export const ButtonsSubmit = styled.button`
   background-color: ${({ theme }) => theme.backgroundColor};
   width: ${({ theme }) => theme.width}px;
   height: ${({ theme }) => theme.height}px;
   border-color: transparent;
   border-radius: ${({ theme }) => theme.borderRadius}px;
   color: white;
   font-size: ${({ theme }) => theme.fontSize}rem;
   margin-top: 10px;

   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   font-weight: bold;
   font-style: italic;
   color: ${({ theme }) => theme.fontColor};

   :hover {
      background-color: transparent;
      color: ${({ theme }) => theme.backgroundColor};
      border: 2px solid ${({ theme }) => theme.backgroundColor};
      transition: all 50ms;
   }

   :active {
      transform: scale(0.95);
   }

   &#form-btn {
      left: 0;
      right: 0;
      margin: 0;
      padding: 0;

      position: relative;
      width: 90%;
      height: 36px;
      font-size: 1.1rem;
      top: 0.5rem;
      bottom: 1.5rem;
      border-radius: 22px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
   }
   .a {
      outline: 20px solid red;
   }
   #b {
      outline: 20px solid red;
   }
`;
