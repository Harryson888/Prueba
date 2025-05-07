import React from 'react';
import { LogInIcon, PackageIcon, CloudIcon, HardHatIcon, LayoutDashboardIcon } from 'lucide-react';
interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}
export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab
}) => {
  const menuItems = [{
    id: 'access-control',
    label: 'Control de Acceso',
    icon: <LogInIcon size={20} />
  }, {
    id: 'inventory',
    label: 'Produccion',
    icon: <PackageIcon size={20} />
  }, {
    id: 'gas-registry',
    label: 'Registro de Gases',
    icon: <CloudIcon size={20} />
  }, {
    id: 'work-fronts',
    label: 'Frentes de Trabajo',
    icon: <HardHatIcon size={20} />
  }];
  return <aside className="w-64 bg-gray-900 text-white">
      <div className="p-4 flex items-center gap-3">
        <LayoutDashboardIcon size={28} />
        <h1 className="text-xl font-bold">Panel Supervisor</h1>
      </div>
      <nav className="mt-8">
        <ul>
          {menuItems.map(item => <li key={item.id}>
              <button onClick={() => setActiveTab(item.id)} className={`w-full flex items-center px-6 py-3 text-left ${activeTab === item.id ? 'bg-gray-800 border-l-4 border-white' : 'hover:bg-gray-800'}`}>
                <span className="mr-3">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            </li>)}
        </ul>
      </nav>
    </aside>;
};