import React from "react";
import { TUserInfoProps } from "./user-info.definition";
import * as S from "./user-info.style";
import { Text } from "../text/text.component";
import { trimDate } from "./functions/date-trim";

export function UserInfo({ user, className }: TUserInfoProps) {

   return (
      <S.UserInfo className={className}>
        
        {user.extraInfo === undefined || user.extraInfo === "" ? null :
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
