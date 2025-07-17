import { z } from "zod";
import { onboardingFormSchema } from "@/schemas/onboardingSchema";

export type OnboardingFormValues = z.infer<typeof onboardingFormSchema>;