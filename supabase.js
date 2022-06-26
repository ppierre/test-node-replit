const VITE_SUPABASE_ANON_KEY = process.env['VITE_SUPABASE_ANON_KEY']
const VITE_SUPABASE_URL = process.env['VITE_SUPABASE_URL']

const { createClient } = require( '@supabase/supabase-js' )

// Create a single supabase client for interacting with your database 
module.exports = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)

// Pour l'utiliser dans la console :
/*
const  supabase  = require('./supabase.js')
  */