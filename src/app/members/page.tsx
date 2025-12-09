'use client';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import MemberForm from '@/components/MemberForm';
import { useState } from 'react';

export default function MembersPage() {
  const [members, setMembers] = useState([
    {
      id: '1',
      email: 'juan@example.com',
      full_name: 'Juan Pérez',
      phone: '+34 600 123 456',
      document_id: '12345678A',
      status: 'active' as const,
      created_at: '2024-01-15',
      updated_at: '2024-01-15',
    },
  ]);

  const handleAddMember = (data: {
    email: string;
    full_name: string;
    phone: string;
    document_id: string;
  }) => {
    const newMember = {
      id: String(members.length + 1),
      ...data,
      status: 'active' as const,
      created_at: new Date().toISOString().split('T')[0],
      updated_at: new Date().toISOString().split('T')[0],
    };
    setMembers([...members, newMember]);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <div className="max-w-7xl">
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Gestión de Miembros</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg border border-slate-200 p-6">
                  <h2 className="text-lg font-semibold text-slate-900 mb-4">
                    Miembros Registrados
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">
                            Nombre
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">
                            Email
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-slate-700">
                            Teléfono
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
                        {members.map((member) => (
                          <tr
                            key={member.id}
                            className="border-b border-slate-200 hover:bg-slate-50"
                          >
                            <td className="px-4 py-3 text-sm text-slate-900">
                              {member.full_name}
                            </td>
                            <td className="px-4 py-3 text-sm text-slate-600">
                              {member.email}
                            </td>
                            <td className="px-4 py-3 text-sm text-slate-600">
                              {member.phone}
                            </td>
                            <td className="px-4 py-3 text-sm">
                              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                                {member.status === 'active' ? 'Activo' : 'Inactivo'}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm space-x-2">
                              <button className="text-blue-600 hover:text-blue-800">
                                Editar
                              </button>
                              <button className="text-red-600 hover:text-red-800">
                                Eliminar
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div>
                <MemberForm onSubmit={handleAddMember} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
