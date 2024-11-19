import { MessageSquare, Users, BarChart2, Settings, HelpCircle, AlertCircle } from 'lucide-react';
import SidebarMenuItem from './sidebar/SidebarMenuItem';
import QuickStats from './sidebar/QuickStats';
import { MenuItem } from './sidebar/types';
import image from './logo.jpeg';
interface SidebarProps {
  onViewChange: (view: string) => void;
  currentView: string;
}

export default function Sidebar({ onViewChange, currentView }: SidebarProps) {
  const menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: MessageSquare,
      isActive: currentView === 'dashboard',
      count: 3,
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: BarChart2,
      isActive: currentView === 'analytics',
    },
    {
      id: 'teams',
      label: 'Teams',
      icon: Users,
      count: 3,
      isActive: currentView === 'teams',
    },
    {
      id: 'alerts',
      label: 'Predictive Alerts',
      icon : AlertCircle,
      count: 3,
      isActive: currentView === 'teams',
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
    },
    {
      id: 'help',
      label: 'Help & Support',
      icon: HelpCircle,
    },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="flex items-center p-4 border-r border-gray-200">
        <img src={image} alt="Logo" className="h-10 w-10 object-cover rounded" />
        <h1 className="ml-2 text-lg font-bold text-gray-800">ConfliGuard</h1>
      </div>

      
      <QuickStats />
      
      <nav className="flex-1 px-2 py-4 space-y-1">
        {menuItems.map((item: MenuItem) => (
          <SidebarMenuItem 
            key={item.id} 
            {...item} 
            onClick={() => onViewChange(item.id)}
          />
        ))}
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
          Settings
        </button>
      </div>
    </div>
  );
}