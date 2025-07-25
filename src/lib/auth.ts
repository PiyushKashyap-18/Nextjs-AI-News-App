// src/lib/auth.ts
import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";

export const auth = () => getServerSession(authOptions);
