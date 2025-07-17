"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { onboardingFormSchema } from "@/schemas/onboardingSchema";
import { OnboardingFormValues } from "@/types/onboardingForm";

const categorizedNewsTopics = [
  {
    category: "Sports",
    topics: [
      { id: "nfl", label: "NFL" },
      { id: "nba", label: "NBA" },
      { id: "mlb", label: "MLB" },
      { id: "soccer", label: "Soccer" },
      { id: "nhl", label: "NHL" },
      { id: "golf", label: "Golf" },
      { id: "tennis", label: "Tennis" },
      { id: "f1", label: "Formula 1" },
    ],
    initialShow: 5,
  },
  {
    category: "News",
    topics: [
      { id: "weather", label: "Weather" },
      { id: "history", label: "History" },
      { id: "politics", label: "Politics" },
      { id: "health", label: "Health" },
      { id: "general-news", label: "General News" },
      { id: "technology", label: "Technology" },
      { id: "finance", label: "Finance" },
      { id: "science", label: "Science" },
    ],
    initialShow: 5,
  },
  {
    category: "Music",
    topics: [
      { id: "pop", label: "Pop" },
      { id: "hip-hop-rap", label: "Hip-Hop/Rap" },
      { id: "country", label: "Country" },
      { id: "latino-music", label: "Latino Music" },
      { id: "rnb-soul", label: "R&B/Soul" },
      { id: "rock", label: "Rock" },
      { id: "jazz", label: "Jazz" },
      { id: "classical", label: "Classical" },
    ],
    initialShow: 5,
  },
  {
    category: "Entertainment",
    topics: [
      { id: "movies", label: "Movies" },
      { id: "tv-shows", label: "TV Shows" },
      { id: "celebrity-news", label: "Celebrity News" },
      { id: "gaming", label: "Gaming" },
      { id: "books", label: "Books" },
      { id: "anime", label: "Anime" },
      { id: "fashion", label: "Fashion" },
      { id: "food", label: "Food" },
    ],
    initialShow: 5,
  },
];

const defaultValues: Partial<OnboardingFormValues> = {
  preferredTopics: [],
};

export function OnboardingForm() {
  const router = useRouter();
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({});

  const form = useForm<OnboardingFormValues>({
    resolver: zodResolver(onboardingFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = (data: OnboardingFormValues) => {
    toast.success("Preferences saved!", {
      description: JSON.stringify(data, null, 2),
    });
    router.push("/app"); // Redirect to home page after saving
  };

  const toggleCategoryExpansion = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="w-full max-w-2xl flex flex-col gap-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Interests Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Your Interests</h2>
            <p className="text-muted-foreground">
              Select topics you&apos;re interested in and add custom keywords.
            </p>
            {categorizedNewsTopics.map((cat) => (
              <div key={cat.category} className="space-y-4">
                <h3 className="text-xl font-bold">{cat.category}</h3>
                <FormField
                  control={form.control}
                  name="preferredTopics"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-wrap gap-2">
                        {cat.topics
                          .slice(
                            0,
                            expandedCategories[cat.category]
                              ? cat.topics.length
                              : cat.initialShow
                          )
                          .map((topic) => (
                            <Button
                              key={topic.id}
                              type="button"
                              variant={
                                field.value?.includes(topic.id)
                                  ? "default"
                                  : "outline"
                              }
                              className={cn(
                                "rounded-full px-4 py-2",
                                field.value?.includes(topic.id)
                                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                  : "border-input bg-background hover:bg-accent hover:text-accent-foreground"
                              )}
                              onClick={() => {
                                const currentTopics = field.value || [];
                                if (currentTopics.includes(topic.id)) {
                                  field.onChange(
                                    currentTopics.filter(
                                      (id: string) => id !== topic.id
                                    )
                                  );
                                } else {
                                  field.onChange([...currentTopics, topic.id]);
                                }
                              }}
                            >
                              {topic.label}
                            </Button>
                          ))}
                        {cat.topics.length > cat.initialShow && (
                          <Button
                            type="button"
                            variant="outline"
                            className="rounded-full px-4 py-2"
                            onClick={() =>
                              toggleCategoryExpansion(cat.category)
                            }
                          >
                            {expandedCategories[cat.category]
                              ? "Show less"
                              : "Show more"}{" "}
                            <Plus className="ml-2 h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-end w-full">
            <Button type="submit">Save Preferences</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
