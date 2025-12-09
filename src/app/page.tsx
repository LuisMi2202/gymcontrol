'use client';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import StatCard from '@/components/StatCard';
import { Users, Key, CreditCard, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Header />
        <main className="p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-slate-600 mt-2">Bienvenido al control de acceso del gimnasio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Miembros Activos"
              value="1,248"
              icon={Users}
              change={12}
            />
            <StatCard
              title="Accesos Hoy"
              value="342"
              icon={Key}
              change={8}
            />
            <StatCard
              title="Ingresos (Mes)"
              value="$24,580"
              icon={CreditCard}
              change={15}
            />
            <StatCard
              title="Crecimiento"
              value="23%"
              icon={TrendingUp}
              change={5}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Accesos Recientes</h2>
              <div className="space-y-4">
                {[
                  { member: 'Juan Pérez', time: '09:30 AM', type: 'Entrada' },
                  { member: 'María García', time: '09:15 AM', type: 'Salida' },
                  { member: 'Carlos López', time: '08:45 AM', type: 'Entrada' },
                  { member: 'Ana Martínez', time: '08:20 AM', type: 'Salida' },
                  { member: 'Pedro Sánchez', time: '07:50 AM', type: 'Entrada' },
                ].map((access, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">{access.member}</p>
                      <p className="text-sm text-slate-600">{access.time}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      access.type === 'Entrada' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {access.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Estado del Gimnasio</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-600 mb-2">Ocupación</p>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <p className="text-sm font-medium text-slate-900 mt-1">65% (256/400)</p>
                </div>

                <div>
                  <p className="text-sm text-slate-600 mb-2">Membresías Activas</p>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div className="bg-green-600 h-3 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                  <p className="text-sm font-medium text-slate-900 mt-1">78% (975/1248)</p>
                </div>

                <div>
                  <p className="text-sm text-slate-600 mb-2">Pagos Pendientes</p>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div className="bg-yellow-600 h-3 rounded-full" style={{ width: '22%' }}></div>
                  </div>
                  <p className="text-sm font-medium text-slate-900 mt-1">22% (273 miembros)</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
