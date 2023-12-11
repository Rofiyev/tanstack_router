import { ReactNode } from "react";
import { Navbar } from "./components";

export default function App({ children }: { children: ReactNode }) {
  return (
    <main className="container">
      <Navbar />
      {children}
    </main>
  );
}
