import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qlgmapnwfppgxouobojk.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsZ21hcG53ZnBwZ3hvdW9ib2prIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1NTUwMTYsImV4cCI6MjA3NDEzMTAxNn0.9m5Cwgwv4wtHP4noBH9fFSrUOz3-rCeNGt6p9KwH6o4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
