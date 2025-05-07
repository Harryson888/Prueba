import React, { useState } from 'react';
import { PlusIcon, FilterIcon, DownloadIcon } from 'lucide-react';
import { ProductionDataForm } from './ProductionDataForm';
export const InventoryPanel: React.FC = () => {
  const [showProductionForm, setShowProductionForm] = useState(false);
  // Mock inventory data
  const inventoryItems = [{
    id: 1,
    name: 'Carbón Tipo A',
    quantity: '1,250',
    unit: 'Toneladas',
    location: 'Almacén Principal',
    lastUpdated: '14/05/2023'
  }, {
    id: 2,
    name: 'Carbón Tipo B',
    quantity: '850',
    unit: 'Toneladas',
    location: 'Almacén Sur',
    lastUpdated: '15/05/2023'
  }, {
    id: 3,
    name: 'Herramientas',
    quantity: '45',
    unit: 'Unidades',
    location: 'Bodega Este',
    lastUpdated: '10/05/2023'
  }, {
    id: 4,
    name: 'Equipo de Seguridad',
    quantity: '120',
    unit: 'Sets',
    location: 'Bodega Central',
    lastUpdated: '12/05/2023'
  }, {
    id: 5,
    name: 'Explosivos',
    quantity: '30',
    unit: 'Cajas',
    location: 'Almacén Seguridad',
    lastUpdated: '13/05/2023'
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">
          Gestión de Produccion
        </h1>
        <div className="flex gap-3">
          <button className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900" onClick={() => setShowProductionForm(true)}>
            <PlusIcon size={18} className="mr-2" />
            Agregar Datos de Producción
          </button>
        </div>
      </div>
      {showProductionForm ? <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">
              Nuevo Registro de Producción
            </h2>
            <button className="text-gray-500 hover:text-gray-700" onClick={() => setShowProductionForm(false)}>
              ✕
            </button>
          </div>
          <ProductionDataForm onCancel={() => setShowProductionForm(false)} />
        </div> : <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Inventario Actual</h2>
            <div className="flex items-center space-x-3">
              <button className="flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
                <FilterIcon size={16} className="mr-2" />
                Filtrar
              </button>
              <button className="flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
                <DownloadIcon size={16} className="mr-2" />
                Exportar
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="py-3 px-4 text-left">Material</th>
                  <th className="py-3 px-4 text-left">Cantidad</th>
                  <th className="py-3 px-4 text-left">Unidad</th>
                  <th className="py-3 px-4 text-left">Ubicación</th>
                  <th className="py-3 px-4 text-left">Última Actualización</th>
                  <th className="py-3 px-4 text-left">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {inventoryItems.map(item => <tr key={item.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{item.name}</td>
                    <td className="py-3 px-4">{item.quantity}</td>
                    <td className="py-3 px-4">{item.unit}</td>
                    <td className="py-3 px-4">{item.location}</td>
                    <td className="py-3 px-4">{item.lastUpdated}</td>
                    <td className="py-3 px-4">
                      <button className="text-blue-600 hover:text-blue-800 mr-3">
                        Editar
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        Eliminar
                      </button>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>}
    </div>;
};