import { renderHook, act } from "@testing-library/react-hooks";
import { createMemoryHistory, MemoryHistory } from "history";
import { Router } from "react-router";

import { useBlocker } from "../useBlocker";

describe("useBlocker", () => {
  const msg = "ok?";
  let jsdomConfirm: ((message?: string | undefined) => boolean) &
    ((message?: string | undefined) => boolean);

  let history: MemoryHistory;

  beforeEach(() => {
    jsdomConfirm = window.confirm;
    history = createMemoryHistory();
  });

  afterEach(() => {
    window.confirm = jsdomConfirm;
  });

  describe("If block is enabled", () => {
    beforeEach(() => {
      renderHook(() => useBlocker(true, msg), {
        wrapper: Router,
        initialProps: {
          location: "/",
          navigator: history,
        },
      });
    });

    describe("If true in window.confirm", () => {
      it("should page transition without being blocked", () => {
        window.confirm = () => true;
        act(() => history.push("/foo"));
        expect(history.location.pathname).toBe("/foo");
      });
    });
    describe("If false in window.confirm", () => {
      it("should be blocked and no page transition", () => {
        window.confirm = () => false;
        act(() => history.push("/foo"));
        expect(history.location.pathname).toBe("/");
      });
    });
  });

  describe("If block is disabled", () => {
    beforeEach(() => {
      renderHook(() => useBlocker(false, msg), {
        wrapper: Router,
        initialProps: {
          location: "/",
          navigator: history,
        },
      });
    });

    it("should page transition without being blocked", () => {
      act(() => history.push("/foo"));
      expect(history.location.pathname).toBe("/foo");
    });
  });
});
