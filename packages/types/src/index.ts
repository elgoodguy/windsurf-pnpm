// Common types shared across the applications
export interface User {
  id: string;
  email: string;
  role: 'customer' | 'driver' | 'admin';
  created_at: string;
  updated_at: string;
}
