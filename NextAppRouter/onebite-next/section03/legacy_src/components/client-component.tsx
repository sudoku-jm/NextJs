"use client";

import { ReactNode } from "react";

// import ServerComponent from "./server-compoent";

export default function ClientComponent({ children }: { children: ReactNode }) {
  console.log("클라리언트 컴포넌트 콘솔임다");
  return <div>{children}</div>;
}
