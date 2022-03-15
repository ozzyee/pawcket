import styled from "styled-components";

export const CardInfoDiv = styled.div`
   width: 100%;
   background-color: #e6f4f8;
   border-radius: 22px;
   padding: 10px;
   padding-top: 40px;
   padding-bottom: 20px;
   box-shadow: 5px 5px 5px rgba(14, 23, 27, 0.4);
   margin-bottom: 20px;
`;

export const TextHolder = styled.div`
   padding: 5px;
   margin: 0;
   margin-top: 0rem;
   overflow: none;
   z-index: 1;
   position: relative;
   right: auto;
   left: 6%;
   background-color: #ffffff;
   border-radius: 0% 20% 20% 20%;

   .bold {
      font-weight: bold;
      padding-right: 5px;
   }

   .postText {
      font-size: 0.2rem;
      margin: 0;
      margin-top: 4px;
      justify-self: center;
      background-color: green;
   }
`;
export const List = styled.ul`
   padding: 0;
   display: flex;
   flex-direction: column;
   align-content: center;
   list-style-type: none;
`;

export const ListItem = styled.li`
   list-style-type: none;
   padding: 0;
   margin: 5px;
   position: relative;
   right: 5%;
`;
