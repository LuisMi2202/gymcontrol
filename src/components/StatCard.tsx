'use client';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
  change?: string;
}

export default function StatCard({ title, value, icon, change }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-600">{title}</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">{value}</p>
          {change && (
            <p className="text-xs text-green-600 mt-2">{change}</p>
          )}
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
    </div>
  );
}
