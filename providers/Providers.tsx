"use client";
import React, { ReactNode } from "react";
import ChatProvider from "./ChatProvider";
import { ThemeProvider } from "./ThemeProvider/theme-provider";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ChatProvider>{children}</ChatProvider>
    </ThemeProvider>
  );
};

export default Providers;
