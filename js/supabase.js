import {
createClient
}

from

'https://esm.sh/@supabase/supabase-js'

const supabase =
createClient(
SUPABASE_URL,
SUPABASE_KEY
)

window.supabase =
supabase
