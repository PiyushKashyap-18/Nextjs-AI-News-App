import React from "react";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "../ModeToggle";

const SettingsDialog = () => {
  return (
    <div className="p-4 space-y-4">
      <DialogHeader>
        <DialogTitle>Account Settings</DialogTitle>
        <DialogDescription>
          Manage your account preferences and notifications here.
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="dark-mode">Dark Mode</Label>
          <ModeToggle />
        </div>
        {/* <Button className="w-full">Save Changes</Button> */}
      </div>
    </div>
  );
};

export default SettingsDialog;
