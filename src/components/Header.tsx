import { Bell, Search, Settings } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center flex-1">
          <div className="relative w-full max-w-2xl">
            <input
              type="search"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search conversations..."
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Settings className="h-5 w-5 text-gray-600" />
          </button>
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white text-sm font-medium">JD</span>
          </div>
        </div>
      </div>
    </header>
  );
}