import React from "react";
import { TFriendsModalProps } from "./friends-modal.definition";
import * as S from "./friends-modal.style" ;

export function FriendsModal ({ className }: TFriendsModalProps) {
  return (
    <S.FriendsModalDiv className={className}>
    </S.FriendsModalDiv>
  );
}
