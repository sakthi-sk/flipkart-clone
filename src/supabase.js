


import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://jyzqpomdjykcztynatas.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)

const supabase = createClient('https://jyzqpomdjykcztynatas.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5enFwb21kanlrY3p0eW5hdGFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwMTQyNTksImV4cCI6MjAxMjU5MDI1OX0.CwhZbX4MEe2b7y1sTcNR7ebIShopWIeKZiknGIxigBU')

export default supabase;