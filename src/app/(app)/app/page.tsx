"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import ReelCard from "@/app/components/app/ReelCard";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/UseMobile";

interface Reel {
  id: string;
  title: string;
  description: string;
  backgroundColor: string;
}

const DUMMY_REELS: Reel[] = [
  {
    id: "1",
    title: "Sunset Serenity",
    description: "Golden hour over the mountains.",
    backgroundColor: "bg-gradient-to-br from-orange-500 to-red-500",
  },
  {
    id: "2",
    title: "Urban Pulse",
    description: "The vibrant energy of the city at night.",
    backgroundColor: "bg-gradient-to-br from-blue-700 to-purple-700",
  },
  {
    id: "3",
    title: "Forest Whispers",
    description: "Tranquil moments deep in the woods.",
    backgroundColor: "bg-gradient-to-br from-green-600 to-emerald-600",
  },
  {
    id: "4",
    title: "Ocean Depths",
    description: "Exploring the mysteries beneath the waves.",
    backgroundColor: "bg-gradient-to-br from-cyan-600 to-blue-600",
  },
  {
    id: "5",
    title: "Desert Bloom",
    description: "Life thriving in the arid landscape.",
    backgroundColor: "bg-gradient-to-br from-yellow-500 to-amber-500",
  },
];

const SWIPE_THRESHOLD = 50; // Minimum pixel distance for a swipe
const WHEEL_DEBOUNCE_TIME = 500; // Milliseconds to debounce wheel events

const ReelViewer: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);
  const isSwiping = useRef(false);
  const lastWheelTime = useRef(0);
  const isMobile = useIsMobile();

  const goToNextReel = useCallback(() => {
    setActiveIndex((prevIndex) =>
      Math.min(prevIndex + 1, DUMMY_REELS.length - 1)
    );
  }, []);

  const goToPreviousReel = useCallback(() => {
    setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }, []);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    startY.current = e.touches[0].clientY;
    isSwiping.current = true;
  }, []);

  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      if (!isSwiping.current) return;

      const endY = e.changedTouches[0].clientY;
      const deltaY = endY - startY.current;

      if (deltaY < -SWIPE_THRESHOLD) {
        goToNextReel(); // Swiped up
      } else if (deltaY > SWIPE_THRESHOLD) {
        goToPreviousReel(); // Swiped down
      }
      isSwiping.current = false;
    },
    [goToNextReel, goToPreviousReel]
  );

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastWheelTime.current < WHEEL_DEBOUNCE_TIME) {
        return; // Debounce rapid wheel events
      }
      lastWheelTime.current = now;

      if (e.deltaY > 0) {
        goToNextReel(); // Scroll down, go to next reel
      } else if (e.deltaY < 0) {
        goToPreviousReel(); // Scroll up, go to previous reel
      }
    },
    [goToNextReel, goToPreviousReel]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (isMobile) {
      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchend", handleTouchEnd);
    } else {
      container.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (isMobile) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchend", handleTouchEnd);
      } else {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [handleTouchStart, handleTouchEnd, handleWheel, isMobile]);

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center"
      style={{ touchAction: "none" }} // Prevent default touch scrolling
    >
      {DUMMY_REELS.map((reel, index) => (
        <div
          key={reel.id}
          className={cn(
            "absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out",
            "flex items-center justify-center" // Center content within the reel div
          )}
          style={{
            transform: `translateY(${(index - activeIndex) * 100}%)`,
            zIndex: index === activeIndex ? 10 : 1, // Bring active reel to front
          }}
        >
          <ReelCard
            title={reel.title}
            description={reel.description}
            backgroundColor={reel.backgroundColor}
            isActive={index === activeIndex}
          />
        </div>
      ))}
    </div>
  );
};

export default ReelViewer;
