import { useState } from "react";
import logo from "../../assets/logo.svg";

import * as S from "./style";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <S.Root>
      <S.Header>
        <S.Logo src={logo} alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <S.Button
            type="button"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </S.Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <S.Link
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </S.Link>
          {" | "}
          <S.Link
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </S.Link>
        </p>
      </S.Header>
    </S.Root>
  );
};
