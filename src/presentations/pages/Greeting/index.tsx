import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import logo from "~/assets/logo.svg";
import { Counter } from "~/presentations/components/Counter";
import * as S from "./style";

export const Greeting: React.FC = () => {
  const [count, setCount] = useState(0);
  const { t } = useTranslation("greeting");

  return (
    <S.Root>
      <S.Header>
        <S.Logo src={logo} alt="logo" />
        <p>{t("Hello")}</p>
        <p>
          <Counter
            count={count}
            onClick={() => setCount((count) => count + 1)}
          />
        </p>
        <p>
          <S.Link
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("Learn React")}
          </S.Link>
          {" | "}
          <S.Link
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("Vite Docs")}
          </S.Link>
        </p>
      </S.Header>
    </S.Root>
  );
};
