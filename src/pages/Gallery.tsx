
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getAllPhotos } from '@/utils/photoStorage';

interface Photo {
  id: number;
  url: string;
  title: string;
  caption: string;
}

const Gallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const allPhotos = getAllPhotos();
    setPhotos(allPhotos);
  }, []);

  const handleContinue = () => {
    window.location.href = '/login';
  };

  const handleLogin = () => {
    window.location.href = 'https://facaseusite.com.br/login.html';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Header with Login Button */}
      <header className="w-full p-4">
        <div className="max-w-6xl mx-auto flex justify-end">
          <Button onClick={handleLogin} size="lg" className="px-6 py-2">
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
            {photos.map(photo => (
              <Card key={photo.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={photo.url} 
                      alt={photo.caption || photo.title} 
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-white font-semibold text-lg mb-1">{photo.title}</h3>
                      <p className="text-white/90 text-sm">{photo.caption}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            {/* Conteúdo adicional pode ser adicionado aqui */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
