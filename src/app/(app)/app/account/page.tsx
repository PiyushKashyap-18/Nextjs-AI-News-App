"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Settings,
  // SlidersHorizontal,
  LogOut,
  MoreHorizontal,
  Mail,
  CheckCircle,
} from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge"; // Import the Badge component
import SettingsDialog from "@/app/components/setting/SettingDialog";
// import PreferencesDialog from "@/app/components/setting/PrefrenceDialog";
import SignOutAlertDialog from "@/app/components/setting/SignOutDialog";

const AccountPage = () => {
  const user = {
    name: "Test User",
    email: "Test@example.com",
    avatar: "https://github.com/shadcn.png",
    isVerified: true, // Added for the verified badge
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-background text-foreground pt-6 sm:pt-24">
      {/* Header and User Profile */}
      <Card className="w-full max-w-2xl mb-8 ">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-2xl font-bold">My Account</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => console.log("Edit Profile clicked")}
              >
                Edit Profile
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => console.log("View Activity clicked")}
              >
                View Activity
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="flex flex-col items-center text-center">
          <Avatar className="h-24 w-24 mb-4 border-2 border-primary">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex items-center mb-1">
            <h2 className="text-xl font-semibold mr-2">{user.name}</h2>
            {user.isVerified && (
              <Badge
                variant="secondary"
                className="flex items-center gap-1 px-2 py-1 text-xs"
              >
                <CheckCircle className="h-3 w-3 text-blue-500" /> Verified
              </Badge>
            )}
          </div>
          <p className="text-muted-foreground flex items-center mb-1">
            <Mail className="h-4 w-4 mr-2" /> {user.email}
          </p>
        </CardContent>
      </Card>

      {/* Account Options Card */}
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Account Options</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" /> Settings
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <SettingsDialog />
            </DialogContent>
          </Dialog>

          {/* <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                <SlidersHorizontal className="mr-2 h-4 w-4" /> Preferences
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <PreferencesDialog />
            </DialogContent>
          </Dialog> */}

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-destructive hover:text-destructive"
              >
                <LogOut className="mr-2 h-4 w-4" /> Sign Out
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <SignOutAlertDialog />
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountPage;
