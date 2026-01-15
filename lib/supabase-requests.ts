import { supabase, ShowWithEpisodes, Show, Content } from './supabase'

export async function getAllShows(): Promise<Show[]> {
  const { data, error } = await supabase
    .from('shows')
    .select('id, title, summary, created_at, modified_at')
    .is('deleted_at', null)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching shows:', error)
    throw error
  }

  return data || []
}

export async function getShowById(id: string): Promise<ShowWithEpisodes | null> {
  // First, get the show details
  const { data: show, error: showError } = await supabase
    .from('shows')
    .select('id, title, summary, created_at, modified_at')
    .eq('id', id)
    .is('deleted_at', null)
    .single()

  if (showError || !show) {
    console.error('Error fetching show:', showError)
    return null
  }

  // Get seasons for this show
  const { data: seasons, error: seasonsError } = await supabase
    .from('seasons')
    .select('id, number, show_id, created_at, modified_at')
    .eq('show_id', id)
    .is('deleted_at', null)
    .order('number', { ascending: true })

  if (seasonsError) {
    console.error('Error fetching seasons:', seasonsError)
  }

  // Get episodes for each season
  const seasonsWithEpisodes = await Promise.all(
    (seasons || []).map(async (season) => {
      const { data: episodes, error: episodesError } = await supabase
        .from('episodes')
        .select('id, title, number, season_id, description, created_at, modified_at')
        .eq('season_id', season.id)
        .is('deleted_at', null)
        .order('number', { ascending: true })

      if (episodesError) {
        console.error('Error fetching episodes:', episodesError)
      }

      return {
        ...season,
        episodes: episodes || []
      }
    })
  )

  // Get the show poster (content with type 'poster')
  const { data: poster, error: posterError } = await supabase
    .from('content')
    .select('*')
    .eq('show_id', id)
    .eq('content_type', 'poster')
    .is('deleted_at', null)
    .single()

  if (posterError) {
    console.error('Error fetching poster:', posterError)
  }

  return {
    ...show,
    seasons: seasonsWithEpisodes,
    poster: poster || undefined
  }
}

export async function getShowIdsForStaticGeneration(): Promise<string[]> {
  const { data, error } = await supabase
    .from('shows')
    .select('id')
    .is('deleted_at', null)

  if (error) {
    console.error('Error fetching show IDs:', error)
    throw error
  }

  return data?.map(show => show.id) || []
}

export async function getAllShowsWithPosters(): Promise<(Show & { poster?: Content })[]> {
  const { data: shows, error: showsError } = await supabase
    .from('shows')
    .select('id, title, summary, created_at, modified_at')
    .is('deleted_at', null)
    .order('created_at', { ascending: false })

  if (showsError) {
    console.error('Error fetching shows:', showsError)
    throw showsError
  }

  if (!shows || shows.length === 0) {
    return []
  }

  // Get posters for all shows
  const { data: posters, error: postersError } = await supabase
    .from('content')
    .select('*')
    .eq('content_type', 'poster')
    .is('deleted_at', null)
    .in('show_id', shows.map(show => show.id))

  if (postersError) {
    console.error('Error fetching posters:', postersError)
  }

  // Combine shows with their posters
  return shows.map(show => ({
    ...show,
    poster: posters?.find(poster => poster.show_id === show.id)
  }))
}

export interface EpisodeWithShow {
  id: string
  title?: string
  number: number
  season_id: string
  description?: string
  created_at: string
  modified_at: string
  season?: {
    id: string
    number: number
    show_id: string
    created_at: string
    modified_at: string
  }
  show?: Show
}

export async function getEpisodeById(id: string): Promise<EpisodeWithShow | null> {
  // Get episode details
  const { data: episode, error: episodeError } = await supabase
    .from('episodes')
    .select('id, title, number, season_id, description, created_at, modified_at')
    .eq('id', id)
    .is('deleted_at', null)
    .single()

  if (episodeError || !episode) {
    console.error('Error fetching episode:', episodeError)
    return null
  }

  // Get season details
  const { data: season, error: seasonError } = await supabase
    .from('seasons')
    .select('id, number, show_id, created_at, modified_at')
    .eq('id', episode.season_id)
    .is('deleted_at', null)
    .single()

  if (seasonError) {
    console.error('Error fetching season:', seasonError)
  }

  // Get show details if we have a season
  let show: Show | undefined
  if (season) {
    const { data: showData, error: showError } = await supabase
      .from('shows')
      .select('id, title, summary, created_at, modified_at')
      .eq('id', season.show_id)
      .is('deleted_at', null)
      .single()

    if (showError) {
      console.error('Error fetching show:', showError)
    } else {
      show = showData
    }
  }

  return {
    ...episode,
    season: season || undefined,
    show: show || undefined,
  }
} 