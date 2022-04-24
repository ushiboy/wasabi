import React from "react";
import { useTranslation } from "react-i18next";

import * as S from "./style";

type Props = {
  count: number;
  onClick: () => void;
};

export const Counter: React.FC<Props> = ({ count, onClick }) => {
  const { t } = useTranslation("greeting");
  return (
    <S.Button type="button" data-hook="counter" onClick={onClick}>
      {t("count is", { val: count })}
    </S.Button>
  );
};
