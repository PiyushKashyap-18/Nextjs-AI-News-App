"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ReelCardProps {
  title: string;
  description: string;
  backgroundColor: string;
  isActive: boolean;
}

const ReelCard: React.FC<ReelCardProps> = ({
  title,
  description,
  backgroundColor,
  isActive,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center w-full h-full p-8 text-white transition-opacity duration-500 ease-in-out",
        backgroundColor,
        isActive ? "opacity-100" : "opacity-0"
      )}
    >
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
        {title}
      </h2>
      <p className="text-lg md:text-xl text-center max-w-md">{description}</p>
    </div>
  );
};

export default ReelCard;
