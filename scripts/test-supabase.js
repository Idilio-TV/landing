// Test script to verify Supabase connection
// Run with: node scripts/test-supabase.js

require("dotenv").config({ path: ".env.local" });

const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("❌ Missing Supabase environment variables");
  console.log("Please create a .env.local file with:");
  console.log("NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url");
  console.log("NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  console.log("🔌 Testing Supabase connection...");

  try {
    // Test basic connection
    const { data, error } = await supabase
      .from("shows")
      .select("count")
      .limit(1);

    if (error) {
      console.error("❌ Database connection failed:", error.message);
      return false;
    }

    console.log("✅ Database connection successful!");

    // Test fetching shows
    const { data: shows, error: showsError } = await supabase
      .from("shows")
      .select("id, title")
      .is("deleted_at", null)
      .limit(5);

    if (showsError) {
      console.error("❌ Error fetching shows:", showsError.message);
      return false;
    }

    console.log(`✅ Successfully fetched ${shows?.length || 0} shows`);

    if (shows && shows.length > 0) {
      console.log("📺 Available shows:");
      shows.forEach((show) => {
        console.log(`  - ${show.title} (ID: ${show.id})`);
      });
    }

    return true;
  } catch (error) {
    console.error("❌ Unexpected error:", error.message);
    return false;
  }
}

async function main() {
  console.log("🚀 Starting Supabase connection test...\n");

  const success = await testConnection();

  console.log("\n" + (success ? "🎉 All tests passed!" : "💥 Tests failed!"));

  if (!success) {
    console.log("\nTroubleshooting tips:");
    console.log("1. Check your .env.local file has correct values");
    console.log("2. Verify your Supabase project is active");
    console.log("3. Check your database schema matches the expected structure");
    console.log(
      "4. Ensure your RLS policies allow anonymous access to shows table"
    );
  }

  process.exit(success ? 0 : 1);
}

main().catch(console.error);
