'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', href: '/dashboard', icon: '📊' },
    { name: 'Miembros', href: '/members', icon: '👥' },
    { name: 'Membresías', href: '/memberships', icon: '🏋️' },
    { name: 'Control de Acceso', href: '/access', icon: '🚪' },
    { name: 'Pagos', href: '/payments', icon: '💳' },
    { name: 'Reportes', href: '/reports', icon: '📈' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white h-screen sticky top-0 flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold">GymControl</h1>
        <p className="text-sm text-slate-400">Sistema de Acceso</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-700">
        <button className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors">
          Cerrar Sesión
        </button>
      </div>
    </aside>
  );
}
