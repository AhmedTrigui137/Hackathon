import { MessageSquare, Users, BarChart2, Settings, HelpCircle } from 'lucide-react';
import { MenuItem } from './types';

export const menuItems: MenuItem[] = [
  {
    id: 'chats',
    label: 'Chats',
    icon: MessageSquare,
    isActive: true,
    count: 3,
  },
  {
    id: 'teams',
    label: 'Teams',
    icon: Users,
    count: 2,
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: BarChart2,
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