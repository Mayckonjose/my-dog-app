'use client';

import React, { useState } from 'react';
import { Input, Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (username === 'user' && password === 'password') {
      console.log('Login bem-sucedido!');
      router.push('/');
    } else {
      setError('Nome de usuário ou senha inválidos.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)] p-4 bg-gray-50">
      <Card className="w-full max-w-md p-6 shadow-xl rounded-2xl">
        <CardHeader className="flex justify-center pb-4">
          <h1 className="text-4xl font-bold text-gray-800">Login</h1>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            <Input
              label="Nome de Usuário"
              placeholder="Digite seu nome de usuário"
              value={username}
              onValueChange={setUsername}
              isClearable
              color="primary"
              variant="bordered"
            />
            <Input
              label="Senha"
              placeholder="Digite sua senha"
              type="password"
              value={password}
              onValueChange={setPassword}
              isClearable
              color="primary"
              variant="bordered"
            />
            {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
            <Button type="submit" color="primary" variant="shadow" className="mt-6 text-lg">
              Entrar
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}