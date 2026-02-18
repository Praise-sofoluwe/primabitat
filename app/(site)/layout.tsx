import { ReactNode } from "react";
import { Navbar } from "./_components/Navbar";
import LoginSuccessToast from "@/components/ui/LoginSuccessToast";

export default function LayoutSite({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 lg:px-8">{children}</main>
      <LoginSuccessToast />
    </div>
  );
}
