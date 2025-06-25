
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LogIn, UserPlus, Globe, Code } from 'lucide-react';

const Login = () => {
  const handleLogin = () => {
    window.location.href = 'https://facaseusite.com.br/login';
  };

  const handleRegister = () => {
    window.location.href = 'https://facaseusite.com.br/register';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center items-center gap-3 mb-6">
              <Code className="w-10 h-10 text-blue-600" />
              <Globe className="w-10 h-10 text-green-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
              Bem-vindo
            </CardTitle>
            <p className="text-gray-600">
              Acesse sua conta ou registre-se para continuar
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={handleLogin}
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium"
              size="lg"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Fazer Login
            </Button>
            
            <Button 
              onClick={handleRegister}
              variant="outline"
              className="w-full h-12 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium"
              size="lg"
            >
              <UserPlus className="w-5 h-5 mr-2" />
              Registrar-se
            </Button>
          </CardContent>
        </Card>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Desenvolvido para facilitar seu acesso aos nossos serviços
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
