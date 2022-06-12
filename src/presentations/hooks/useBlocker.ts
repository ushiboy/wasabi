import { History } from "history";
import { useEffect, useContext, ContextType } from "react";
import {
  Navigator,
  UNSAFE_NavigationContext as NavigationContext,
} from "react-router-dom";

interface NavigatorWithBlock extends Navigator {
  block: History["block"];
}

type NavicationContextWithBlock = ContextType<typeof NavigationContext> & {
  navigator: NavigatorWithBlock;
};

export const useBlocker = (shouldBlock: boolean, confirmMessage: string) => {
  const { navigator } = useContext(
    NavigationContext
  ) as NavicationContextWithBlock;

  useEffect(() => {
    const unblock = navigator.block((tx) => {
      if (!shouldBlock) {
        unblock();
        tx.retry();
        return;
      }
      if (window.confirm(confirmMessage)) {
        unblock();
        tx.retry();
      }
    });

    return unblock;
  }, [navigator, shouldBlock]);
};
