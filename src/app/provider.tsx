import React from "react";
import { SessionProvider } from "next-auth/react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../store"; // Pastikan path ini benar

interface ProviderProps {
  children: React.ReactNode;
}

function ReduxStoreProvider({ children }: ProviderProps) {
  return (
    <SessionProvider>
      <ReduxProvider store={store}>{children ?? null}</ReduxProvider>
    </SessionProvider>
  );
}

export default ReduxStoreProvider;
