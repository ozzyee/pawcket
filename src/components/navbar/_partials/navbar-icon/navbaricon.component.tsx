import { TNavbarIconProps } from "./navbaricon.definition";
import Link from "next/link";
import Image from "next/image";
import { ListItem } from "./navbaricon.style";
export default function NavbarIcon({
   ...props
}: //    name,
//    direct,
//    picture,
//    children,
TNavbarIconProps) {
   return (
      //<Link href={props.direct}>
      <ListItem>
         <Image src="/back-arrow-icon.svg" layout="fill" objectFit="contain" />
      </ListItem>
      // </Link>
   );
}
