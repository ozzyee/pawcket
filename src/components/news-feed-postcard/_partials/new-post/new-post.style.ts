import styled from "styled-components";

// export const PostWrapper = styled.div`
//    width: 100%;
// `;
type Tvisible = {
   visible?: boolean;
   onClick?: any;
};
export const test = styled.div<Tvisible>`
   z-index: 2;
   bottom: 8%;
   position: fixed;
   right: 20px;
   display: flex;
   background-color: ${(props) => (props.visible ? "white" : "none")};
   .postbackground {
      background-color: white;
      outline: solid red 2px;
   }
`;

export const postButton = styled.button<Tvisible>`
   background-color: #fb8500;
   border: none;
   /* color: white; */
   font-family: "Poppins", sans-serif;
   border-radius: 50px;
   width: 50px;
   height: 50px;
   text-align: center;
   @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
   font-weight: 500;
   font-size: 2rem;
   text-align: center;
`;
