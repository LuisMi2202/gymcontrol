import { createClient } from '@supabase/supabase-js';

// Validar que las variables de entorno existan
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Faltan variables de entorno de Supabase. Asegúrate de configurar NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY'
  );
}

// Cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipos de error de Supabase
export interface SupabaseError {
  message: string;
  status?: number;
}
