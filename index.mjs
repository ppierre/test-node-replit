import { supabase } from'./supabase.mjs'

const { data, error } = await supabase.rpc('toutes_les_offres')

console.log(data)
