import React from "react";
import { Link } from "react-router-dom";

import * as S from "../style";

export const RootPage: React.FC = () => {
  return (
    <S.Root>
      <S.Title>Check before page transition</S.Title>
      <S.LinkList>
        <S.LinkListItem>
          <Link to="confirm">Confirm</Link>
        </S.LinkListItem>
      </S.LinkList>
    </S.Root>
  );
};
