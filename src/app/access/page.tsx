'use client';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { useState } from 'react';

export default function AccessPage() {
  const [accessLogs] = useState([
    {
      id: '1',
      member: 'Juan Pérez',
      type: 'Entrada',
      time: '08:30 AM',
      date: '2024-12-09',
    },
    {
      id: '2',
      member: 'María García',
      type: 'Salida',
      time: '09:45 AM',
      date: '2024-12-09',
    },
    {
      id: '3',
      member: 'Carlos López',
      type: 'Entrada',
      time: '10:15 AM',
      date: '2024-12-09',
    },
  ]);

  const [currentMembers] = useState([
    {
      id: '1',
      name: 'Juan Pérez',
      entryTime: '08:30 AM',
      duration: '1h 45min',
    },
    {
      id: '3',
      name: 'Carlos López',
      entryTime: '10:15 AM',
      duration: '15min',
    },
  ]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <div className="max-w-7xl">
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Control de Acceso</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <p className="text-sm font-medium text-slate-600">En el Gimnasio Ahora</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">{currentMembers.length}</p>
                <p className="text-xs text-slate-600 mt-1">Personas activas</p>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <p className="text-sm font-medium text-slate-600">Entradas Hoy</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">12</p>
                <p className="text-xs text-slate-600 mt-1">Registros de entrada</p>
              </div>
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <p className="text-sm font-medium text-slate-600">Salidas Hoy</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">10</p>
                <p className="text-xs text-slate-600 mt-1">Registros de salida</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">
                  Miembros en el Gimnasio
                </h2>
                <div className="space-y-3">
                  {currentMembers.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200"
                    >
                      <div>
                        <p className="font-medium text-slate-900">{member.name}</p>
                        <p className="text-xs text-slate-600">Entrada: {member.entryTime}</p>
                      </div>
                      <span className="text-sm font-medium text-green-700">
                        {member.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg border border-slate-200 p-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">
                  Registro de Acceso Reciente
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="px-3 py-2 text-left text-xs font-medium text-slate-700">
                          Miembro
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-slate-700">
                          Tipo
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-slate-700">
                          Hora
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {accessLogs.map((log) => (
                        <tr key={log.id} className="border-b border-slate-200 hover:bg-slate-50">
                          <td className="px-3 py-2 text-xs text-slate-900">{log.member}</td>
                          <td className="px-3 py-2 text-xs">
                            <span
                              className={`px-2 py-1 rounded text-xs font-medium ${
                                log.type === 'Entrada'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-red-100 text-red-800'
                              }`}
                            >
                              {log.type}
                            </span>
                          </td>
                          <td className="px-3 py-2 text-xs text-slate-600">{log.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
