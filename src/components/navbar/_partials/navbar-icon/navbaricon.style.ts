import styled from "styled-components";


export const ListItem = styled.li`
   fill: white;
   list-style-type: none;
   width: 100px;
   height : 100px;
   display : flex;
   align-items : center;
   justify-content : center;

   width: 23px;
   height : 23px;
   z-index: 9999;

   :active {
      transform: scale(0.95);
   }
   .position{
      position: relative;
   }

   .scale{
      transform: scale(.3);
      width : 100%;
      height : 100%;

   }

//    .user-icon{
//       width : 100%;
//       height : 100%;
//    }`

   .user-icon{
      transform: scale(1.7);

   }

`
