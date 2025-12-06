// src/supabase.js
import { createClient } from "@supabase/supabase-js";

// TODO: Replace with your actual Supabase URL and anon key
// In Vite, use import.meta.env instead of process.env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "placeholder-key";

// Create client with placeholder values (will be replaced when you configure Supabase)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

