"use client";
import { SessionProvider } from "next-auth/react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../store";

interface ProviderProps {
  children: React.ReactNode;
}

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ReduxProvider store={store}>{children}</ReduxProvider>;
    </SessionProvider>
  );
}

export default Provider;
