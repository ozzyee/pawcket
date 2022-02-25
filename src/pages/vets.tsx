import type { NextPage } from "next";
import { MainLayout } from "../layouts/main-layout/main-layout.component";
import { useRouter } from "next/router";
import * as S from "../styles/vets.style";
import { Buttons } from "../components/buttons/buttons.component";
import {Navbar} from "../components/navbar/navbar.component"
import {VetsInfo} from "../components/vets-info/vets-info.component"
import {useState} from "react";
import {VetList, VetButtons} from "../layouts/main-layout/main-layout.style";

const Vet: NextPage = () => {
   const initialState = [{name : "sdsd", phoneNumber : "9239238", vetAddress : "i92ijwdioj", vetWebsite  : "sidjsidj"}, {name : "sdsd", phoneNumber : "9239238", vetAddress : "i92ijwdioj", vetWebsite  : "sidjsidj"}, {name : "sdsd", phoneNumber : "9239238", vetAddress : "i92ijwdioj", vetWebsite  : "sidjsidj"}, {name : "sdsd", phoneNumber : "9239238", vetAddress : "i92ijwdioj", vetWebsite  : "sidjsidj"}, {name : "sdsd", phoneNumber : "9239238", vetAddress : "i92ijwdioj", vetWebsite  : "sidjsidj"}, {name : "sdsd", phoneNumber : "9239238", vetAddress : "i92ijwdioj", vetWebsite  : "sidjsidj"},{name : "sdsd", phoneNumber : "9239238", vetAddress : "i92ijwdioj", vetWebsite  : "sidjsidj"}]
   const [vets, setVets] = useState(initialState);
   return (
      <>
         <MainLayout bottomTitle="Vets near you" topChildren={<S.FrameVets />}>
            <VetButtons>

            <li><Buttons vetsNavBtn={true} dark={true}>
               Open Now
            </Buttons></li>
            <li><Buttons vetsNavBtn={true} dark={true}>
               On Call
            </Buttons></li>
            <li><Buttons vetsNavBtn={true} dark={true}>
               Near You
            </Buttons></li>
            </VetButtons>
            <VetList>
            {vets.map((vet, index)=>{
          return <li><VetsInfo vetName={vet.name} vetPhoneNumber={vet.phoneNumber} vetAddress={vet.vetAddress} vetWebsite={vet.vetWebsite} key={index}/></li>
            })}
            </VetList>
         </MainLayout>
            <Navbar />
      </>
   );
};

export default Vet;


