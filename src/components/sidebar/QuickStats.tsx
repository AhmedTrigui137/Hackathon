import React from 'react';
import { MessageSquare, Users, Clock } from 'lucide-react';

export default function QuickStats() {
  return (
    <div className="px-4 py-5 border-t border-b border-gray-200">
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="flex items-center justify-center w-8 h-8 mx-auto mb-2 bg-blue-100 rounded-full">
            <MessageSquare className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-sm font-medium text-gray-900">128</div>
          <div className="text-xs text-gray-500">Chats</div>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center w-8 h-8 mx-auto mb-2 bg-green-100 rounded-full">
            <Users className="w-4 h-4 text-green-600" />
          </div>
          <div className="text-sm font-medium text-gray-900">12</div>
          <div className="text-xs text-gray-500">Teams</div>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center w-8 h-8 mx-auto mb-2 bg-purple-100 rounded-full">
            <Clock className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-sm font-medium text-gray-900">24h</div>
          <div className="text-xs text-gray-500">Avg. Time</div>
        </div>
      </div>
    </div>
  );
}