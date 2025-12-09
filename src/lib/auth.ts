import { supabase } from './supabase';
import { User } from '@/types';

// Función para obtener el usuario actual
export async function getCurrentUser(): Promise<User | null> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) return null;

    return {
      id: user.id,
      email: user.email || '',
      role: 'member', // Por defecto, los nuevos usuarios son miembros
    };
  } catch (error) {
    console.error('Error al obtener usuario actual:', error);
    return null;
  }
}

// Función para login
export async function login(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error en login:', error);
    throw error;
  }
}

// Función para registro
export async function signup(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error en registro:', error);
    throw error;
  }
}

// Función para logout
export async function logout() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    console.error('Error en logout:', error);
    throw error;
  }
}

// Función para resetear contraseña
export async function resetPassword(email: string) {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/reset-password`,
    });

    if (error) throw error;
  } catch (error) {
    console.error('Error al resetear contraseña:', error);
    throw error;
  }
}
