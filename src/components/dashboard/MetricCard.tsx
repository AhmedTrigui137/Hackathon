import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ComponentType<any>;
  color: string;
}

export default function MetricCard({ title, value, change, trend, icon: Icon, color }: MetricCardProps) {
  const colors = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    indigo: 'bg-indigo-500',
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-2 rounded-lg ${colors[color]} bg-opacity-10`}>
          <Icon className={`w-6 h-6 text-${color}-500`} />
        </div>
        <div className={`flex items-center text-sm ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {trend === 'up' ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
          {change}
        </div>
      </div>
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
    </div>
  );
}