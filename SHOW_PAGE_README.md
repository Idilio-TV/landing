# Show Page Implementation

This document explains the implementation of the show page feature for the Idilio.TV landing page.

## Overview

The show page allows users to view detailed information about individual shows, including:
- Show poster and title
- Show summary/description
- List of episodes organized by seasons
- Call-to-action buttons linking to app stores

## File Structure

```
landing/
├── app/[locale]/show/[id]/
│   ├── page.tsx          # Main show page component
│   ├── loading.tsx       # Loading skeleton
│   ├── error.tsx         # Error boundary
│   └── not-found.tsx     # 404 page for non-existent shows
├── app/[locale]/shows/
│   └── page.tsx          # Shows index page
├── lib/
│   ├── supabase.ts       # Supabase client and types
│   └── supabase-requests.ts # Database query functions
├── scripts/
│   └── test-supabase.js  # Connection test script
└── SUPABASE_SETUP.md     # Supabase configuration guide
```

## Features

### 1. Server-Side Rendering (SSR)
- Pages are rendered on the server for better SEO
- Static generation at build time for all existing shows
- Dynamic fallback for new shows added after build

### 2. Static Generation
- `generateStaticParams()` pre-generates pages for all shows in the database
- `generateMetadata()` creates dynamic meta tags for each show
- Build-time optimization for performance

### 3. Responsive Design
- Mobile-first approach with Tailwind CSS
- Beautiful gradient backgrounds and glass-morphism effects
- Hover animations and smooth transitions

### 4. Error Handling
- Graceful error boundaries for runtime errors
- Loading states with skeleton components
- 404 pages for non-existent shows

## Database Schema Requirements

The implementation expects these tables in your Supabase database:

### shows
```sql
CREATE TABLE shows (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  summary TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  modified_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  deleted_at TIMESTAMP WITH TIME ZONE
);
```

### seasons
```sql
CREATE TABLE seasons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  number INTEGER NOT NULL,
  show_id UUID REFERENCES shows(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  modified_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  deleted_at TIMESTAMP WITH TIME ZONE
);
```

### episodes
```sql
CREATE TABLE episodes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT,
  number INTEGER NOT NULL,
  season_id UUID REFERENCES seasons(id),
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  modified_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  deleted_at TIMESTAMP WITH TIME ZONE
);
```

### content
```sql
CREATE TABLE content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  episode_id UUID REFERENCES episodes(id),
  content_type TEXT CHECK (content_type IN ('poster', 'video', 'trailer')),
  picture_id UUID,
  mux_asset_id TEXT,
  mux_playback_id TEXT,
  season_id UUID REFERENCES seasons(id),
  show_id UUID REFERENCES shows(id),
  language TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  modified_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  deleted_at TIMESTAMP WITH TIME ZONE
);
```

## Setup Instructions

### 1. Environment Variables
Create a `.env.local` file in the `landing` directory:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Test Connection
```bash
node scripts/test-supabase.js
```

### 4. Run Development Server
```bash
npm run dev
```

## Usage

### Accessing Show Pages
- Individual shows: `/show/{show_id}`
- Shows index: `/shows`

### Adding New Shows
1. Insert show data into the `shows` table
2. Add seasons to the `seasons` table
3. Add episodes to the `episodes` table
4. Add poster content to the `content` table
5. Rebuild the application or wait for dynamic generation

### Customizing the Design
- Modify the Tailwind classes in the components
- Update the color scheme in the gradient classes
- Customize the layout in the grid and flexbox classes

## Performance Features

### 1. Static Generation
- Pages are pre-built at build time
- Fast initial page loads
- Better SEO with pre-rendered content

### 2. Image Optimization
- Automatic fallback to default images
- Responsive image sizing
- Lazy loading for better performance

### 3. Database Optimization
- Efficient queries with proper indexing
- Soft delete support for data integrity
- Batch loading of related data

## Troubleshooting

### Common Issues

1. **Supabase Connection Failed**
   - Check environment variables
   - Verify project URL and API key
   - Ensure project is active

2. **Shows Not Loading**
   - Check database schema
   - Verify RLS policies allow anonymous access
   - Check for soft-deleted records

3. **Images Not Displaying**
   - Ensure show images exist in `/public/shows/`
   - Check image naming convention
   - Verify fallback images are available

### Debug Commands

```bash
# Test Supabase connection
node scripts/test-supabase.js

# Check build output
npm run build

# View build logs
npm run build --verbose
```

## Future Enhancements

### Potential Improvements
1. **Caching**: Implement Redis or similar for faster data access
2. **Analytics**: Track show page views and engagement
3. **Search**: Add search functionality across shows
4. **Filtering**: Filter shows by genre, language, etc.
5. **User Accounts**: Allow users to save favorite shows
6. **Comments**: Add user reviews and ratings

### Scalability Considerations
- Implement pagination for large show catalogs
- Add CDN for image delivery
- Consider microservices architecture for high traffic
- Implement proper monitoring and logging

## Support

For technical support or questions about this implementation:
1. Check the troubleshooting section above
2. Review the Supabase documentation
3. Check the Next.js documentation for SSR/SSG features
4. Contact the development team

---

**Note**: This implementation follows Next.js 15 best practices and is designed to be production-ready with proper error handling, loading states, and SEO optimization. 