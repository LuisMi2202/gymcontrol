// Tipos para miembros del gimnasio
export interface Member {
  id: string;
  email: string;
  full_name: string;
  phone: string;
  document_id: string;
  status: 'active' | 'inactive' | 'suspended';
  created_at: string;
  updated_at: string;
}

// Tipos para membresías
export interface Membership {
  id: string;
  member_id: string;
  plan_type: 'monthly' | 'quarterly' | 'annual';
  start_date: string;
  end_date: string;
  status: 'active' | 'expired' | 'cancelled';
  amount_paid: number;
  created_at: string;
}

// Tipos para registros de acceso
export interface AccessLog {
  id: string;
  member_id: string;
  check_in: string;
  check_out: string | null;
  created_at: string;
}

// Tipos para pagos
export interface Payment {
  id: string;
  member_id: string;
  amount: number;
  payment_date: string;
  status: 'completed' | 'pending' | 'failed';
  created_at: string;
}

// Tipos para el usuario autenticado
export interface User {
  id: string;
  email: string;
  role: 'admin' | 'staff' | 'member';
}
