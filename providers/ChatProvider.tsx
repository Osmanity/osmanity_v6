"use client";
import { ChatProviderHook } from "@/hooks/useChat";
import React, { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const ChatProvider: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ChatProviderHook>{children}</ChatProviderHook> // Replace this with your actual providers
  );
};

export default ChatProvider;
