const VITE_SUPABASE_ANON_KEY = process.env['VITE_SUPABASE_ANON_KEY']
const VITE_SUPABASE_URL = process.env['VITE_SUPABASE_URL']

import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
export const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)

// Pour l'utiliser dans la console :
/*
import('./supabase.mjs').then(({supabase}) => global.supabase = supabase)
  */
// ou systématiquement
global.supabase = supabase