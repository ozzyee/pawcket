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

   :hover {
      background-color: transparent;
      color: ${({ theme }) => theme.backgroundColor};
      border: 2px solid ${({ theme }) => theme.backgroundColor};
      transition: all 50ms;
   }

   :active {
      transform: scale(0.95);
   }
`;
