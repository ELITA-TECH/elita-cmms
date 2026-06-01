
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://xvbmhibtolynpmlajuin.supabase.co/rest/v1/'
const supabaseKey = 'sb_publishable_xRAGkvzfhFz76nx7L9WbRQ_IzIBL1z2'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)
