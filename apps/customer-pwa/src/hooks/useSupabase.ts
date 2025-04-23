import { useEffect, useState } from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export function useSupabase() {
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const initSupabase = async () => {
      try {
        if (!supabaseUrl || !supabaseAnonKey) {
          throw new Error('Missing Supabase URL or Anon Key in .env file');
        }
        const client = createClient(supabaseUrl, supabaseAnonKey);
        setSupabase(client);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to initialize Supabase'));
      }
    };

    initSupabase();
  }, []);

  return { supabase, error };
}
