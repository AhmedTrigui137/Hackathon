import { MenuItem } from './types';

interface SidebarMenuItemProps extends MenuItem {
  onClick?: () => void;
}

export default function SidebarMenuItem({ label, icon: Icon, isActive, count, onClick }: SidebarMenuItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg
        ${isActive 
          ? 'text-blue-600 bg-blue-50 hover:bg-blue-100' 
          : 'text-gray-700 hover:bg-gray-100'
        }`}
    >
      <Icon className="h-5 w-5 mr-3" />
      <span className="flex-1 text-left">{label}</span>
      {count !== undefined && (
        <span className={`ml-2 px-2 py-0.5 text-xs rounded-full
          ${isActive 
            ? 'bg-blue-100 text-blue-600' 
            : 'bg-gray-100 text-gray-600'
          }`}>
          {count}
        </span>
      )}
    </button>
  );
}