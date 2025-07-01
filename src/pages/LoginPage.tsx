
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const LoginPage = () => {
  const handleLogin = () => {
    window.location.href = 'https://facaseusite.com.br/login.html';
  };

  const handleRegister = () => {
    window.location.href = 'https://facaseusite.com.br/cadastro.html';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900">
            Bem-vindo
          </CardTitle>
          <CardDescription className="text-gray-600">
            Acesse sua conta ou cadastre-se para continuar
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            onClick={handleLogin}
            className="w-full"
            size="lg"
          >
            Fazer Login
          </Button>
          <Button 
            onClick={handleRegister}
            variant="outline"
            className="w-full"
            size="lg"
          >
            Cadastrar-se
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
