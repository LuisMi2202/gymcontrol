'use client';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export default function MembershipsPage() {
  const memberships = [
    {
      id: '1',
      member: 'Juan Pérez',
      plan: 'Mensual',
      amount: '$30',
      startDate: '2024-01-01',
      endDate: '2024-02-01',
      status: 'active',
    },
    {
      id: '2',
      member: 'María García',
      plan: 'Trimestral',
      amount: '$75',
      startDate: '2024-01-15',
      endDate: '2024-04-15',
      status: 'active',
    },
    {
      id: '3',
      member: 'Carlos López',
      plan: 'Anual',
      amount: '$250',
      startDate: '2024-01-01',
      endDate: '2025-01-01',
      status: 'active',
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <div className="max-w-7xl">
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Membresías</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <p className="text-sm font-medium text-slate-600">Membresías Activas</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">
                  {memberships.filter((m) => m.status === 'active').length}
                </p>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <p className="text-sm font-medium text-slate-600">Ingreso Mensual Estimado</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">$1,250</p>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <p className="text-sm font-medium text-slate-600">Próximas a Vencer</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">2</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                Listado de Membresías
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">
                        Miembro
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">
                        Plan
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">
                        Monto
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">
                        Fecha de Inicio
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">
                        Fecha de Vencimiento
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">
                        Estado
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {memberships.map((membership) => (
                      <tr
                        key={membership.id}
                        className="border-b border-slate-200 hover:bg-slate-50"
                      >
                        <td className="px-4 py-3 text-sm text-slate-900">
                          {membership.member}
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-600">
                          {membership.plan}
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-600">
                          {membership.amount}
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-600">
                          {membership.startDate}
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-600">
                          {membership.endDate}
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                            Activa
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm space-x-2">
                          <button className="text-blue-600 hover:text-blue-800">
                            Editar
                          </button>
                          <button className="text-red-600 hover:text-red-800">
                            Cancelar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
