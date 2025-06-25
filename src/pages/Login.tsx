
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, UserPlus } from 'lucide-react';

const Login = () => {
  const handleLoginRedirect = () => {
    window.location.href = 'https://facaseusite.com.br/login.html';
  };

  const handleCadastroRedirect = () => {
    window.location.href = 'https://facaseusite.com.br/cadastro.html';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="p-3 bg-blue-600 rounded-full">
              <User className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Bem-vindo</h1>
          <p className="text-gray-600">Acesse sua conta ou crie uma nova</p>
        </div>

        <Card className="shadow-lg border-0">
          <CardHeader className="pb-4">
            <CardTitle className="text-center text-xl">Sistema de Login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={handleLoginRedirect}
              className="w-full flex items-center gap-2"
              size="lg"
            >
              <User className="w-5 h-5" />
              Login
            </Button>
            
            <Button 
              onClick={handleCadastroRedirect}
              variant="outline"
              className="w-full flex items-center gap-2"
              size="lg"
            >
              <UserPlus className="w-5 h-5" />
              Cadastro
            </Button>
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-sm text-gray-600">
          <p>Sistema de login seguro</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
