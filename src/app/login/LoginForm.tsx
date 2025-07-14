"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import { Chrome } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    await signIn("google");
    router.push("/app");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="relative w-full max-w-md">
        <BorderBeam className="absolute -top-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
        <Card className="relative w-full rounded-2xl  border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white">
              Sign in to your account
            </CardTitle>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              Use your Google account to sign in.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 px-6 pb-8">
            <Button
              variant="outline"
              className="w-full py-3 text-base font-semibold flex items-center justify-center gap-2"
              onClick={handleGoogleLogin}
            >
              <Chrome className="h-5 w-5" />
              Sign in with Google
            </Button>
            <Separator />
            <div className="text-center text-xs text-gray-500 dark:text-gray-400">
              By clicking continue, you agree to our{" "}
              <Link className="underline hover:text-primary" href="/terms">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link className="underline hover:text-primary" href="/privacy">
                Privacy Policy
              </Link>
              .
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;
