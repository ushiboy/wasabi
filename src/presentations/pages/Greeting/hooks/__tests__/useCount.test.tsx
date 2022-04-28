import { renderHook, act } from "@testing-library/react-hooks";

import { useCount } from "../useCount";

describe("useCount", () => {
  describe("increment", () => {
    it("should increase the count", () => {
      const { result } = renderHook(() => useCount());
      expect(result.current.count).toBe(0);

      act(() => result.current.increment());
      expect(result.current.count).toBe(1);

      act(() => result.current.increment());
      expect(result.current.count).toBe(2);
    });
  });
});
