import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AppPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="p-10">
      {/* <h1 className="text-3xl font-bold">Welcome, {session?.user?.name}!</h1>
      <p>Your email: {session?.user?.email}</p>
      <Image
        src={session?.user?.image || "/default.png"}
        alt="profile"
        width={64}
        height={64}
        className="w-16 h-16 rounded-full mt-4"
      /> */}
    </main>
  );
}
