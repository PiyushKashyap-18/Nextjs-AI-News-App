import { ReactNode } from "react";
import ClientNavbar from "../components/app/ClientNavbar";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <ClientNavbar />
      <main>{children}</main>
    </div>
  );
}
