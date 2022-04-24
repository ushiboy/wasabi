import React from "react";

import * as S from "./style";

type Props = {
  count: number;
  onClick: () => void;
};

export const Counter: React.FC<Props> = ({ count, onClick }) => (
  <S.Button type="button" onClick={onClick}>
    count is: {count}
  </S.Button>
);
