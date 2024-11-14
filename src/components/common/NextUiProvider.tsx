"use client";

import { NextUIProvider } from "@nextui-org/react";

const UiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default UiProvider;
