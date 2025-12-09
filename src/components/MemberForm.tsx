'use client';

import React from 'react';

interface MemberFormProps {
  onSubmit: (data: {
    email: string;
    full_name: string;
    phone: string;
    document_id: string;
  }) => void;
  isLoading?: boolean;
}

export default function MemberForm({ onSubmit, isLoading = false }: MemberFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    onSubmit({
      email: formData.get('email') as string,
      full_name: formData.get('full_name') as string,
      phone: formData.get('phone') as string,
      document_id: formData.get('document_id') as string,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-slate-200 p-6 max-w-2xl">
      <h2 className="text-xl font-semibold text-slate-900 mb-6">Nuevo Miembro</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Nombre Completo
          </label>
          <input
            type="text"
            name="full_name"
            required
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Juan Pérez"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Correo Electrónico
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="juan@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Teléfono
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+34 600 123 456"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Documento de Identidad
          </label>
          <input
            type="text"
            name="document_id"
            required
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="12345678A"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white font-medium py-2 rounded-lg transition-colors"
      >
        {isLoading ? 'Guardando...' : 'Guardar Miembro'}
      </button>
    </form>
  );
}
