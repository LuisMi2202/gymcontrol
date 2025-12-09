'use client';

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="px-6 py-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-900">Bienvenido</h2>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg">
            Perfil
          </button>
          <button className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg">
            ⚙️ Configuración
          </button>
        </div>
      </div>
    </header>
  );
}
