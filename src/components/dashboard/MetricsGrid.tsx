import React from 'react';
import MetricCard from './MetricCard';
import { MessageSquare, Users, Clock, TrendingUp } from 'lucide-react';

export default function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard
        title="Total Conversations"
        value="1,234"
        change="+12.3%"
        trend="up"
        icon={MessageSquare}
        color="blue"
      />
      <MetricCard
        title="Active Users"
        value="892"
        change="+5.4%"
        trend="up"
        icon={Users}
        color="green"
      />
      <MetricCard
        title="Avg. Response Time"
        value="2.4m"
        change="-8.1%"
        trend="down"
        icon={Clock}
        color="purple"
      />
      <MetricCard
        title="Engagement Rate"
        value="67%"
        change="+3.2%"
        trend="up"
        icon={TrendingUp}
        color="indigo"
      />
    </div>
  );
}