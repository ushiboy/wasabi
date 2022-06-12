import React from "react";
import { Route, Routes } from "react-router";

import { Greeting, NotFound, CheckPageTransition } from "./pages";

export const AppRoutes: React.FC = () => (
  <Routes>
    <Route index element={<Greeting />} />
    <Route path="checkPageTransition/*" element={<CheckPageTransition />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
