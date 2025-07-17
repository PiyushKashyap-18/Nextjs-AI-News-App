import { z } from "zod";

export const onboardingFormSchema = z.object({
    preferredTopics: z.array(z.string()).optional(),
});