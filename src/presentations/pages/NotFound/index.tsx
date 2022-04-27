import React from "react";
import { useTranslation } from "react-i18next";

import * as S from "./style";

export const NotFound: React.FC = () => {
  const [t] = useTranslation("error");

  return (
    <S.Root>
      <S.Title>{t("Page Not Found")}</S.Title>
    </S.Root>
  );
};
