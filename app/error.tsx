'use client'; 

import React, { useEffect } from 'react';
import { Button } from '@nextui-org/react'; 

interface ErrorProps {
  error: Error;
  reset: () => void; 
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-4 bg-red-50 dark:bg-red-900 text-red-800 dark:text-red-100">
      <h2 className="text-3xl font-bold mb-4">Algo deu errado!</h2>
      <p className="text-lg text-center mb-6">
        Pedimos desculpas pelo inconveniente. Por favor, tente novamente.
      </p>
      <p className="text-sm text-center text-gray-600 dark:text-gray-300 italic mb-6">
        Detalhes do erro: {error.message}
      </p>
      <Button color="danger" onPress={() => reset()}>
        Tentar Novamente
      </Button>
      <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        Se o problema persistir, por favor, entre em contato com o suporte.
      </p>
    </div>
  );
}