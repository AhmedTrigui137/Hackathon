import React from 'react';
import { AlertCircle, Info, CheckCircle } from 'lucide-react';

interface AlertItemProps {
  title: string;
  description: string;
  type: 'warning' | 'info' | 'success';
  time: string;
}

export default function AlertItem({ title, description, type, time }: AlertItemProps) {
  const icons = {
    warning: AlertCircle,
    info: Info,
    success: CheckCircle,
  };

  const colors = {
    warning: 'text-yellow-500',
    info: 'text-blue-500',
    success: 'text-green-500',
  };

  const Icon = icons[type];

  return (
    <div className="flex items-start space-x-4">
      <div className={`${colors[type]} flex-shrink-0`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="flex-shrink-0">
        <p className="text-sm text-gray-500">{time}</p>
      </div>
    </div>
  );
}