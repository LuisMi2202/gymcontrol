'use client';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { useState } from 'react';

export default function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  const reportData = {
    totalMembers: 156,
    activeMembers: 143,
    newMembers: 12,
    totalRevenue: 4560,
    averageRevenue: 2280,
    totalVisits: 450,
    averageVisitsPerDay: 45,
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <div className="max-w-7xl">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-slate-900">Reportes</h1>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="weekly">Semanal</option>
                <option value="monthly">Mensual</option>
                <option value="yearly">Anual</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <p className="text-sm font-medium text-slate-600">Total de Miembros</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">{reportData.totalMembers}</p>
                <p className="text-xs text-green-600 mt-2">↑ 12 este período</p>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <p className="text-sm font-medium text-slate-600">Miembros Activos</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">{reportData.activeMembers}</p>
                <p className="text-xs text-slate-600 mt-2">91.7% de ocupación</p>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <p className="text-sm font-medium text-slate-600">Ingresos Totales</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">${reportData.totalRevenue}</p>
                <p className="text-xs text-green-600 mt-2">↑ 8.5% vs período anterior</p>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <p className="text-sm font-medium text-slate-600">Visitas Totales</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">{reportData.totalVisits}</p>
                <p className="text-xs text-slate-600 mt-2">
                  {reportData.averageVisitsPerDay} visitas/día
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">
                  Evolución de Miembros
                </h2>
                <div className="h-64 flex items-end justify-around gap-2">
                  {[65, 78, 82, 91, 105, 119, 128, 143].map((value, idx) => (
                    <div key={idx} className="flex flex-col items-center flex-1">
                      <div
                        className="w-full bg-blue-500 rounded-t opacity-70 hover:opacity-100 transition-opacity"
                        style={{
                          height: `${(value / 143) * 100}%`,
                          minHeight: '4px',
                        }}
                      ></div>
                      <span className="text-xs text-slate-600 mt-2">S{idx + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">
                  Distribución de Membresías
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-slate-700">Mensual</span>
                      <span className="text-sm font-medium text-slate-900">56%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: '56%' }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-slate-700">Trimestral</span>
                      <span className="text-sm font-medium text-slate-900">28%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: '28%' }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-slate-700">Anual</span>
                      <span className="text-sm font-medium text-slate-900">16%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full"
                        style={{ width: '16%' }}
                      ></div>
                    </div>
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
