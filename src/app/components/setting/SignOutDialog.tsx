"use client";

import React from "react";
import { signOut } from "next-auth/react";
import {
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const SignOutAlertDialog = () => {
  const handleSignOut = () => {
    signOut({ callbackUrl: "/" }); // or any post-logout URL
  };

  return (
    <>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you sure you want to sign out?</AlertDialogTitle>
        <AlertDialogDescription>
          You will be logged out of your account. You can always sign back in
          later.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel asChild>
          <Button variant="outline">Cancel</Button>
        </AlertDialogCancel>
        <AlertDialogAction asChild>
          <Button onClick={handleSignOut}>Sign Out</Button>
        </AlertDialogAction>
      </AlertDialogFooter>
    </>
  );
};

export default SignOutAlertDialog;
