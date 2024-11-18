import React from 'react';
import { useConflictStore } from '../../store/conflictStore';
import { AlertTriangle, Users, Clock, TrendingUp } from 'lucide-react';
import MetricCard from './MetricCard';

export default function ConflictMetrics() {
  const conflicts = useConflictStore((state) => state.conflicts);
  const activeConflicts = useConflictStore((state) => state.getActiveConflicts());

  const metrics = {
    totalConflicts: conflicts.length,
    activeConflicts: activeConflicts.length,
    averageSeverity: activeConflicts.reduce((acc, curr) => acc + curr.severity, 0) / activeConflicts.length,
    resolutionRate: ((conflicts.length - activeConflicts.length) / conflicts.length) * 100,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard
        title="Total Conflicts"
        value={metrics.totalConflicts.toString()}
        change="+2 this week"
        trend="up"
        icon={AlertTriangle}
        color="red"
      />
      <MetricCard
        title="Active Cases"
        value={metrics.activeConflicts.toString()}
        change="-1 this week"
        trend="down"
        icon={Users}
        color="yellow"
      />
      <MetricCard
        title="Avg. Severity"
        value={metrics.averageSeverity.toFixed(1)}
        change="+0.5 this week"
        trend="up"
        icon={TrendingUp}
        color="orange"
      />
      <MetricCard
        title="Resolution Rate"
        value={`${metrics.resolutionRate.toFixed(1)}%`}
        change="+5% this week"
        trend="up"
        icon={Clock}
        color="green"
      />
    </div>
  );
}