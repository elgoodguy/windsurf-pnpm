import { createClient } from '@supabase/supabase-js';

// Create a Supabase client with the cloud instance
export const supabase = createClient(
  'https://yarkompcfueyrqqeslci.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhcmtvbXBjZnVleXJxcWVzbGNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MjMzNDUsImV4cCI6MjA2MDk5OTM0NX0.ownYIRxb1C5OruSKCPC7AxbJce-glIBPUvdKdtrfoCQ'
);

export default supabase;
