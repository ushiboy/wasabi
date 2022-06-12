import React, { useState } from "react";
import { Link } from "react-router-dom";

import * as S from "../style";

import { useBlocker } from "~/presentations/hooks/useBlocker";

export const ConfirmPage: React.FC = () => {
  const [shouldConfirm, setShouldConfirm] = useState<boolean>(false);
  useBlocker(shouldConfirm, "Are you sure you want to move to the next page?");
  return (
    <S.Root>
      <S.Title>Check before page transition</S.Title>
      <label>
        <input
          type="checkbox"
          checked={shouldConfirm}
          onChange={() => setShouldConfirm(!shouldConfirm)}
        />
        Confirmation required
      </label>
      <S.LinkList>
        <S.LinkListItem>
          <Link to="/checkPageTransition">Root</Link>
        </S.LinkListItem>
      </S.LinkList>
    </S.Root>
  );
};
