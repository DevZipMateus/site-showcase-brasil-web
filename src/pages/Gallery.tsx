
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Gallery = () => {
  const photos = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      alt: 'Mulher usando laptop na cama'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      alt: 'Laptop cinza ligado'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      alt: 'Placa de circuito preta'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      alt: 'Monitor mostrando programação Java'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      alt: 'Pessoa usando MacBook Pro'
    }
  ];

  const handleContinue = () => {
    window.location.href = '/login';
  };

  const handleLogin = () => {
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Header with Login Button */}
      <header className="w-full p-4">
        <div className="max-w-6xl mx-auto flex justify-end">
          <Button 
            onClick={handleLogin}
            size="lg"
            className="px-6 py-2"
          >
            Fazer Login
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-4 pb-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Galeria</h1>
            <p className="text-gray-600 text-lg">Confira algumas de nossas criações</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {photos.map((photo) => (
              <Card key={photo.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              onClick={handleContinue}
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg"
            >
              Continuar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
