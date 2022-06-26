console.log('Bonjour monde...')
const supabase = require('./supabase.js')

  (async () => {
    const { data, error } = await supabase.rpc('toutes_les_offres')
    console.log(data)
  })();