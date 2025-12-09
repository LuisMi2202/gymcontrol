'use client';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export default function PaymentsPage() {
  const payments = [
    {
      id: '1',
      member: 'Juan Pérez',
      amount: '$30.00',
      date: '2024-12-01',
      method: 'Tarjeta de Crédito',
      status: 'Completado',
    },
    {
      id: '2',
      member: 'María García',
      amount: '$75.00',
      date: '2024-12-05',
      method: 'Transferencia',
      status: 'Completado',
    },
    {
      id: '3',
      member: 'Carlos López',
      amount: '$100.00',
      date: '2024-12-08',
      method: 'Efectivo',
      status: 'Pendiente',
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <div className="max-w-7xl">
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Pagos</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <p className="text-sm font-medium text-slate-600">Ingresos Totales</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">$4,560.00</p>
                <p className="text-xs text-slate-600 mt-1">Este mes</p>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <p className="text-sm font-medium text-slate-600">Pagos Completados</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">28</p>
                <p className="text-xs text-slate-600 mt-1">Este mes</p>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <p className="text-sm font-medium text-slate-600">Pagos Pendientes</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">3</p>
                <p className="text-xs text-slate-600 mt-1">Total</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">Historial de Pagos</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">
                        Miembro
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">
                        Monto
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">
                        Fecha
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">
                        Método
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
                    {payments.map((payment) => (
                      <tr key={payment.id} className="border-b border-slate-200 hover:bg-slate-50">
                        <td className="px-4 py-3 text-sm text-slate-900">{payment.member}</td>
                        <td className="px-4 py-3 text-sm font-medium text-slate-900">
                          {payment.amount}
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-600">{payment.date}</td>
                        <td className="px-4 py-3 text-sm text-slate-600">{payment.method}</td>
                        <td className="px-4 py-3 text-sm">
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${
                              payment.status === 'Completado'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {payment.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm space-x-2">
                          <button className="text-blue-600 hover:text-blue-800">Ver</button>
                          <button className="text-red-600 hover:text-red-800">Anular</button>
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
