import React from 'react'
import { BellIcon, UserIcon } from 'lucide-react'
export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
      <h2 className="text-xl font-semibold text-gray-800">
       Espino 1
      </h2>
      <div className="flex items-center space-x-4">
        <button className="p-1 rounded-full hover:bg-gray-100">
          <BellIcon size={20} className="text-gray-600" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <UserIcon size={18} className="text-white" />
          </div>
          <span className="text-sm font-medium text-gray-700">Supervisor</span>
        </div>
      </div>
    </header>
  )
}
