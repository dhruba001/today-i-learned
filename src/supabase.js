import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vokyckoqugbnjxfwuans.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZva3lja29xdWdibmp4Znd1YW5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMwMjA4ODgsImV4cCI6MjAwODU5Njg4OH0.CiPtjM7EI5FyJrg4oW0-z7okMmmsS0OM9LghP9wPqrc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
