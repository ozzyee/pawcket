import styled from "styled-components";


export const ListItem = styled.li`
   fill: white;
   list-style-type: none;
   width: 23px;
   height : 23px;
   z-index: 9999;
   :active {
      transform: scale(0.95);
   }
   .position{
      position: relative;
   }
   .user-icon{
      transform: scale(1.7);

   }

`