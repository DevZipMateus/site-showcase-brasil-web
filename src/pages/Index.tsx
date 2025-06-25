
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Globe, Briefcase, ArrowRight, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Welcome Section */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center gap-3 mb-8">
            <Code className="w-16 h-16 text-blue-600" />
            <Globe className="w-16 h-16 text-green-600" />
            <Briefcase className="w-16 h-16 text-purple-600" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Bem-vindo!
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Explore meu portfólio completo de desenvolvimento web com soluções digitais 
            personalizadas para diversos segmentos de mercado.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="outline" className="text-lg px-4 py-2">
              <Globe className="w-5 h-5 mr-2" />
              80+ Sites Desenvolvidos
            </Badge>
            <Badge variant="outline" className="text-lg px-4 py-2">
              <Briefcase className="w-5 h-5 mr-2" />
              10+ Segmentos
            </Badge>
            <Badge variant="outline" className="text-lg px-4 py-2">
              <Code className="w-5 h-5 mr-2" />
              E-commerce & Serviços
            </Badge>
          </div>

          <Card className="max-w-2xl mx-auto shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <User className="w-6 h-6 text-blue-600" />
                Portfólio Profissional
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600 text-lg">
                Descubra projetos desenvolvidos para empresas de diversos setores, 
                desde e-commerce até sistemas corporativos complexos.
              </p>
              
              <Link to="/pag.princi">
                <Button 
                  size="lg" 
                  className="w-full text-lg py-6 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
                >
                  Ver Portfólio Completo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Desenvolvimento Web</h3>
                <p className="text-gray-600 text-sm">
                  Sites modernos e responsivos com as melhores práticas de desenvolvimento
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">E-commerce</h3>
                <p className="text-gray-600 text-sm">
                  Lojas virtuais completas com integração de pagamento e gestão
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Briefcase className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Sistemas Corporativos</h3>
                <p className="text-gray-600 text-sm">
                  Soluções empresariais personalizadas para otimizar processos
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t mt-16 py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600">
              Transformando ideias em realidade digital desde 2020
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
