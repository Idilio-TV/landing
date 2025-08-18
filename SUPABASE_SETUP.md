# Supabase Setup for Landing Page

## Environment Variables

Create a `.env.local` file in the `landing` directory with the following variables:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## Getting Your Supabase Credentials

1. Go to [supabase.com](https://supabase.com) and sign in
2. Select your project (or create a new one)
3. Go to Settings → API
4. Copy the "Project URL" and "anon public" key
5. Paste them in your `.env.local` file

## Database Schema Requirements

The landing page expects the following tables to exist in your Supabase database:

### shows
- `id` (uuid, primary key)
- `title` (text, not null)
- `summary` (text, nullable)
- `created_at` (timestamp)
- `modified_at` (timestamp)
- `deleted_at` (timestamp, nullable)

### seasons
- `id` (uuid, primary key)
- `number` (integer, not null)
- `show_id` (uuid, foreign key to shows.id)
- `created_at` (timestamp)
- `modified_at` (timestamp)
- `deleted_at` (timestamp, nullable)

### episodes
- `id` (uuid, primary key)
- `title` (text, nullable)
- `number` (integer, not null)
- `season_id` (uuid, foreign key to seasons.id)
- `description` (text, nullable)
- `created_at` (timestamp)
- `modified_at` (timestamp)
- `deleted_at` (timestamp, nullable)

### content
- `id` (uuid, primary key)
- `episode_id` (uuid, foreign key to episodes.id)
- `content_type` (text: 'poster', 'video', 'trailer')
- `picture_id` (uuid, nullable)
- `mux_asset_id` (text, nullable)
- `mux_playback_id` (text, nullable)
- `season_id` (uuid, nullable)
- `show_id` (uuid, nullable)
- `language` (text, nullable)
- `created_at` (timestamp)
- `modified_at` (timestamp)
- `deleted_at` (timestamp, nullable)

## Running the Landing Page

1. Install dependencies: `npm install`
2. Set up environment variables (see above)
3. Run development server: `npm run dev`
4. Build for production: `npm run build`

## Show Page URLs

Once set up, your show pages will be accessible at:
- `/show/{show_id}` - where `{show_id}` is the UUID of a show in your database

The pages are statically generated at build time based on the shows in your database. 