import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { User } from '@/types';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtener usuario actual
    const getUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          setUser({
            id: user.id,
            email: user.email || '',
            role: 'member',
          });
        }
      } catch (error) {
        console.error('Error al obtener usuario:', error);
      } finally {
        setLoading(false);
      }
    };

    getUser();

    // Escuchar cambios de autenticación
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          setUser({
            id: session.user.id,
            email: session.user.email || '',
            role: 'member',
          });
        } else {
          setUser(null);
        }
      }
    );

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  return { user, loading };
}
