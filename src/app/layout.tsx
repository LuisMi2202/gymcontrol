import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GymControl - Sistema de Acceso',
  description: 'Sistema de control de acceso, membresías y pagos para gimnasios',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-50">{children}</body>
    </html>
  );
}
