
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Lock, UserPlus, LogIn } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [loginData, setLoginData] = useState({ usuario: '', senha: '' });
  const [cadastroData, setCadastroData] = useState({ usuario: '', senha: '', confirmarSenha: '' });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular chamada à API
    try {
      console.log('Dados de login:', loginData);
      // Aqui você faria a chamada real para o backend PHP
      // const response = await fetch('/login.php', { method: 'POST', ... });
      
      toast({
        title: "Login realizado",
        description: `Bem-vindo, ${loginData.usuario}!`,
      });
    } catch (error) {
      toast({
        title: "Erro no login",
        description: "Usuário ou senha incorretos.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cadastroData.senha !== cadastroData.confirmarSenha) {
      toast({
        title: "Erro no cadastro",
        description: "As senhas não coincidem.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      console.log('Dados de cadastro:', cadastroData);
      // Aqui você faria a chamada real para o backend PHP
      // const response = await fetch('/cadastro.php', { method: 'POST', ... });
      
      toast({
        title: "Cadastro realizado",
        description: "Conta criada com sucesso! Faça login para continuar.",
      });
      
      setCadastroData({ usuario: '', senha: '', confirmarSenha: '' });
    } catch (error) {
      toast({
        title: "Erro no cadastro",
        description: "Não foi possível criar a conta.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login" className="flex items-center gap-2">
                  <LogIn className="w-4 h-4" />
                  Login
                </TabsTrigger>
                <TabsTrigger value="cadastro" className="flex items-center gap-2">
                  <UserPlus className="w-4 h-4" />
                  Cadastro
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-usuario">Usuário</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="login-usuario"
                        type="text"
                        placeholder="Digite seu usuário"
                        value={loginData.usuario}
                        onChange={(e) => setLoginData({ ...loginData, usuario: e.target.value })}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="login-senha">Senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="login-senha"
                        type="password"
                        placeholder="Digite sua senha"
                        value={loginData.senha}
                        onChange={(e) => setLoginData({ ...loginData, senha: e.target.value })}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Entrando..." : "Entrar"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="cadastro">
                <form onSubmit={handleCadastro} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cadastro-usuario">Usuário</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="cadastro-usuario"
                        type="text"
                        placeholder="Escolha um nome de usuário"
                        value={cadastroData.usuario}
                        onChange={(e) => setCadastroData({ ...cadastroData, usuario: e.target.value })}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cadastro-senha">Senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="cadastro-senha"
                        type="password"
                        placeholder="Crie uma senha segura"
                        value={cadastroData.senha}
                        onChange={(e) => setCadastroData({ ...cadastroData, senha: e.target.value })}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmar-senha">Confirmar Senha</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="confirmar-senha"
                        type="password"
                        placeholder="Confirme sua senha"
                        value={cadastroData.confirmarSenha}
                        onChange={(e) => setCadastroData({ ...cadastroData, confirmarSenha: e.target.value })}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Cadastrando..." : "Cadastrar"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-sm text-gray-600">
          <p>Sistema de login seguro com criptografia de senha</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
