import React from "react";
import { Route, Routes } from "react-router";

import { RootPage, ConfirmPage } from "./childs";

export const CheckPageTransition: React.FC = () => (
  <Routes>
    <Route index element={<RootPage />} />
    <Route path="confirm" element={<ConfirmPage />} />
  </Routes>
);
