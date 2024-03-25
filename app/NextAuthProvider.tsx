"use client" // SessionProvider needs to wrap around a client component to be used in layout.tsx, cannot be used directly in layout.tsx
import { SessionProvider } from "next-auth/react";

type Props = {
  children?: React.ReactNode;
};
export const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};