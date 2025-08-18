import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for the landing page
export interface Show {
  id: string
  title: string
  summary?: string
  created_at: string
  modified_at: string
}

export interface Episode {
  id: string
  title?: string
  number: number
  season_id: string
  description?: string
  created_at: string
  modified_at: string
}

export interface Season {
  id: string
  number: number
  show_id: string
  created_at: string
  modified_at: string
}

export interface Content {
  id: string
  episode_id: string
  content_type: 'poster' | 'video' | 'trailer'
  picture_id?: string
  mux_asset_id?: string
  mux_playback_id?: string
  season_id?: string
  show_id?: string
  language?: string
  created_at: string
  modified_at: string
}

export interface ShowWithEpisodes extends Show {
  seasons?: (Season & {
    episodes?: Episode[]
  })[]
  poster?: Content
} 