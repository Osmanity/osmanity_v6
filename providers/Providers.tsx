"use client";
import React, { ReactNode } from "react";
import ChatProvider from "./ChatProvider";
import { CheckboxProvider } from "./CheckboxProvider";
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
      <CheckboxProvider>
        <ChatProvider>{children}</ChatProvider>
      </CheckboxProvider>
    </ThemeProvider>
  );
};

export default Providers;
