"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/store/store";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  const client = new QueryClient();

  return (
    <Provider store={storeRef.current}>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </Provider>
  );
}
