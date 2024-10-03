"use client";
import React, { useEffect, useState } from 'react';
import {MapIcon,} from "@heroicons/react/24/solid";

const PuntosRecarga: React.FC = () => {
  const [puntos, setPuntos] = useState<any[]>([]); // Inicializa como un array vacío

  useEffect(() => {
    const fetchPuntos = async () => {
      try {
        const response = await fetch('/api/recargas');
        if (!response.ok) {
          throw new Error('Error al obtener los puntos de recarga');
        }
        const data = await response.json();
        setPuntos(data); // Asegúrate de que `data` sea un array
      } catch (error) {
        console.error('Error fetching puntos de recarga:', error);
      }
    };

    fetchPuntos();
  }, []);

  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">Puntos de recarga tarjeta SITU</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal dark:bg-gray-700 dark:text-gray-300">
            <th className="py-3 px-6 text-left">Local</th>
            <th className="py-3 px-6 text-left">Dirección</th>
            <th className="py-3 px-6 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light dark:text-gray-300">
          {puntos.length > 0 ? (
            puntos.map((punto) => (
              <tr key={punto.id} className="border-b border-gray-200 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                <td className="py-3 px-6">{punto.local}</td>
                <td className="py-3 px-6">{punto.direccion}</td>
                <td className="py-3 px-6">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${punto.latitud},${punto.longitud}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline flex items-center"
                  >
                    <MapIcon className="h-5 w-5 mr-1" /> {/* Ícono de mapa */}
                    <span>Ver en mapa</span> 
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="py-3 px-6 text-center">No hay puntos de recarga disponibles.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PuntosRecarga;
