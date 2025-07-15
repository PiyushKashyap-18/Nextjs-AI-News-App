import { ReactNode } from "react";
import ClientNavbar from "../components/app/ClientNavbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <ClientNavbar />
      <main>{children}</main>
    </div>
  );
}
