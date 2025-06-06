import React from 'react';
import { Spinner } from '@nextui-org/react'; 

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Spinner size="lg" color="primary" /> {/* Usando o Spinner do NextUI */}
      <p className="mt-4 text-lg">Carregando...</p>
    </div>
  );
}