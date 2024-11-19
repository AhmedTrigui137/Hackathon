import { ExclamationTriangleIcon, SparklesIcon, ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/outline';

interface Alert {
  id: string;
  type: 'warning' | 'opportunity';
  title: string;
  description: string;
  metric: {
    name: string;
    value: string;
    trend: 'up' | 'down';
  };
  priority: 'high' | 'medium' | 'low';
}

const mockAlerts: Alert[] = [
  {
    id: '1',
    type: 'warning',
    title: 'Conflict Risk Detected',
    description: 'Team communication frequency has dropped significantly in the past week.',
    metric: {
      name: 'Messages Sent',
      value: '-35%',
      trend: 'down'
    },
    priority: 'high'
  },
  {
    id: '2',
    type: 'warning',
    title: 'Overload Risk Identified',
    description: 'Two employees are assigned 60% more tasks than the average.',
    metric: {
      name: 'Task Load Disparity',
      value: '+60%',
      trend: 'up'
    },
    priority: 'high'
  },
    {
        id: '4',
        type: 'warning',
        title: 'Potential Conflict Detected',
        description: 'Chat analysis shows increasing negative sentiment between two employees.',
        metric: {
          name: 'Negative Sentiment',
          value: '+40%',
          trend: 'up'
        },
        priority: 'high'
    }
];

const AlertCard: React.FC<{ alert: Alert }> = ({ alert }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-l-4 hover:shadow-lg transition-shadow duration-200"
         style={{ borderLeftColor: alert.type === 'warning' ? '#EF4444' : '#10B981' }}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          {alert.type === 'warning' ? (
            <ExclamationTriangleIcon className="h-6 w-6 text-red-500" />
          ) : (
            <SparklesIcon className="h-6 w-6 text-emerald-500" />
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-900">{alert.title}</h3>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(alert.priority)}`}>
              {alert.priority}
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-600">{alert.description}</p>
          <div className="mt-2 flex items-center text-sm">
            <span className="font-medium text-gray-900">{alert.metric.name}:</span>
            <span className="ml-2 font-medium text-gray-900">{alert.metric.value}</span>
            {alert.metric.trend === 'up' ? (
              <ArrowTrendingUpIcon className="ml-1 h-4 w-4 text-emerald-500" />
            ) : (
              <ArrowTrendingDownIcon className="ml-1 h-4 w-4 text-red-500" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const PredictiveAlerts: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Predictive Alerts</h2>
        <span className="text-sm text-gray-500">Updated 5 minutes ago</span>
      </div>
      <div className="grid gap-4">
        {mockAlerts.map((alert) => (
          <AlertCard key={alert.id} alert={alert} />
        ))}
      </div>
    </div>
  );
};