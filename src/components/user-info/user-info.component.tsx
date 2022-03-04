import React from "react";
import { TUserInfoProps } from "./user-info.definition";
import * as S from "./user-info.style";
import { Text } from "../text/text.component";

export function UserInfo({ user, className }: TUserInfoProps) {

    function trimDate(date:string):string{
        const i = date.indexOf("T")
        const dob = date.substring(1, i)
        return
    }
   return (
      <S.UserInfo className={className}>
        
        {user.extraInfo === undefined ? null :
        <Text className="bio">{`${user.extraInfo}`}</Text>}
        {user.address === undefined ? null :
        <><Text className="placeholder">{"Address:"}</Text>
        <Text>{`${user.address}`}</Text></>}
        {user.DOB === undefined ? null :
        <><Text className="placeholder">{"Date of Birth:"}</Text>
        <Text>{`${trimDate(user.DOB)}`}</Text></>}
        
      </S.UserInfo>
   );
}
