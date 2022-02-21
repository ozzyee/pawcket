import styled from "styled-components";


export const ListItem = styled.li`
   fill: white;
   list-style-type: none;
   width: 100px;
   height : 100px;
   :active {
      transform: scale(0.95);
   }
   .Feed {
      transform: scale(30%);
      display: block;
      position: relative;
}
.Misc {
      transform: scale(.3);
      display: block;
      position: relative;
}
.User {
      display: block;
      position: relative;
}
.Chat {
      transform: scale(.3);
      display: block;
      position: relative;
}
.Vet {
      transform: scale(.3);
      display: block;
      position: relative;
}
`;
