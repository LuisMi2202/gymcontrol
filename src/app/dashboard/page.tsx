'use client';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import StatCard from '@/components/StatCard';

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <div className="max-w-7xl">
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <StatCard
                title="Miembros Activos"
                value="156"
                icon="👥"
                change="↑ 12 esta semana"
              />
              <StatCard
                title="Membresías Vigentes"
                value="143"
                icon="🏋️"
                change="92% de ocupación"
              />
              <StatCard
                title="Ingresos Mensuales"
                value="$4,560"
                icon="💳"
                change="↑ 8.5% vs mes anterior"
              />
              <StatCard
                title="Visitas Hoy"
                value="34"
                icon="🚪"
                change="En tiempo real"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white rounded-lg border border-slate-200 p-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">
                  Actividad Reciente
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <div>
                      <p className="font-medium text-slate-900">Juan Pérez</p>
                      <p className="text-sm text-slate-600">Entrada</p>
                    </div>
                    <span className="text-sm text-slate-600">Hace 5 min</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <div>
                      <p className="font-medium text-slate-900">María García</p>
                      <p className="text-sm text-slate-600">Salida</p>
                    </div>
                    <span className="text-sm text-slate-600">Hace 12 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-900">Carlos López</p>
                      <p className="text-sm text-slate-600">Entrada</p>
                    </div>
                    <span className="text-sm text-slate-600">Hace 18 min</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">
                  Membresías Próximas a Vencer
                </h2>
                <div className="space-y-3">
                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="font-medium text-sm text-slate-900">Ana Martínez</p>
                    <p className="text-xs text-yellow-700">Vence en 3 días</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="font-medium text-sm text-slate-900">Diego Ruiz</p>
                    <p className="text-xs text-yellow-700">Vence en 5 días</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
