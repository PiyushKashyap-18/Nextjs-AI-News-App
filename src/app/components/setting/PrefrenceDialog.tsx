"use client";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useState } from "react";

interface TopicCategory {
  category: string;
  topics: string[];
}

const categories: TopicCategory[] = [
  {
    category: "News & Current Events",
    topics: [
      "Politics",
      "World News",
      "Local News",
      "Business",
      "Technology",
      "Science",
      "Environment",
    ],
  },
  {
    category: "Entertainment",
    topics: [
      "Movies",
      "TV Shows",
      "Music",
      "Gaming",
      "Books",
      "Celebrity News",
    ],
  },
  {
    category: "Lifestyle & Culture",
    topics: [
      "Health",
      "Fitness",
      "Food",
      "Travel",
      "Fashion",
      "Art & Design",
      "Education",
    ],
  },
  {
    category: "Sports",
    topics: [
      "Football",
      "Basketball",
      "Soccer",
      "Tennis",
      "Formula 1",
      "Olympics",
    ],
  },
];

const TopicSelectionDialog = () => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const handleTopicClick = (topic: string) => {
    setSelectedTopics((prevSelected) =>
      prevSelected.includes(topic)
        ? prevSelected.filter((t) => t !== topic)
        : [...prevSelected, topic]
    );
  };

  const handleSavePreferences = () => {
    console.log("Selected Topics:", selectedTopics);
    toast.success("Preferences saved!", {
      description: `You selected ${selectedTopics.length} topics.`,
    });
    // In a real app, you would send these preferences to your backend
  };

  return (
    <div className="p-4 space-y-6">
      <DialogHeader>
        <DialogTitle>What are you interested in?</DialogTitle>
        <DialogDescription>
          Select topics to personalize your news feed. You can choose as many as
          you like.
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
        {categories.map((cat) => (
          <div key={cat.category}>
            <h3 className="text-lg font-semibold mb-2">{cat.category}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.topics.map((topic) => (
                <Badge
                  key={topic}
                  variant={
                    selectedTopics.includes(topic) ? "default" : "secondary"
                  }
                  className={cn(
                    "cursor-pointer px-3 py-1 text-sm rounded-full transition-colors",
                    selectedTopics.includes(topic)
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  )}
                  onClick={() => handleTopicClick(topic)}
                >
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      <DialogFooter>
        <Button onClick={handleSavePreferences} className="w-full">
          Save My Preferences
        </Button>
      </DialogFooter>
    </div>
  );
};

export default TopicSelectionDialog;
