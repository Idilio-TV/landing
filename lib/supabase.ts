import { createClient, SupabaseClient } from '@supabase/supabase-js'

let supabaseClient: SupabaseClient | null = null

export function getSupabaseClient(): SupabaseClient {
  if (supabaseClient) {
    return supabaseClient
  }

  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables')
  }

  supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
  return supabaseClient
}

// Use Proxy to lazy-load the client only when accessed
export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop: string | symbol) {
    const client = getSupabaseClient()
    const value = (client as unknown as Record<string | symbol, unknown>)[prop]
    if (typeof value === 'function') {
      return value.bind(client)
    }
    return value
  },
}) as SupabaseClient

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