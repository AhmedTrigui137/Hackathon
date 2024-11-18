export interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType;
  isActive?: boolean;
  count?: number;
}