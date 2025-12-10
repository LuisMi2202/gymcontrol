'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-slate-900 mb-2">
            GymControl
          </h1>
          <p className="text-center text-slate-600 mb-8">
            Sistema de Acceso y Control de Membresías
          </p>

          <div className="space-y-3">
            <Link
              href="/login"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors text-center block"
            >
              Iniciar Sesión
            </Link>
            <Link
              href="/signup"
              className="w-full bg-slate-200 hover:bg-slate-300 text-slate-900 font-medium py-3 rounded-lg transition-colors text-center block"
            >
              Registrarse
            </Link>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-slate-900 mb-3">Características:</h3>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>✓ Gestión de miembros</li>
              <li>✓ Control de acceso</li>
              <li>✓ Gestión de membresías</li>
              <li>✓ Sistema de pagos</li>
              <li>✓ Reportes y estadísticas</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
