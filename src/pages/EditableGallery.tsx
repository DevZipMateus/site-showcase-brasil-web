import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Upload, X } from 'lucide-react';

interface Photo {
  id: number;
  url: string;
  title: string;
  caption: string;
}

const EditableGallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      title: 'Trabalho Remoto',
      caption: 'Mulher usando laptop na cama'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      title: 'Tecnologia',
      caption: 'Laptop cinza ligado'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      title: 'Hardware',
      caption: 'Placa de circuito preta'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      title: 'Programação',
      caption: 'Monitor mostrando programação Java'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      title: 'MacBook',
      caption: 'Pessoa usando MacBook Pro'
    }
  ]);

  const [newPhoto, setNewPhoto] = useState({
    url: '',
    title: '',
    caption: ''
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileUpload = useCallback((file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === 'string') {
          setNewPhoto(prev => ({ ...prev, url: result }));
        }
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    const imageFile = files.find(file => file.type.startsWith('image/'));
    
    if (imageFile) {
      handleFileUpload(imageFile);
    }
  }, [handleFileUpload]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleAddPhoto = () => {
    if (newPhoto.url && newPhoto.title) {
      const photo: Photo = {
        id: Date.now(),
        url: newPhoto.url,
        title: newPhoto.title,
        caption: newPhoto.caption
      };
      setPhotos([...photos, photo]);
      setNewPhoto({ url: '', title: '', caption: '' });
      setIsDialogOpen(false);
    }
  };

  const handleLogout = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Header */}
      <header className="w-full p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Galeria Editável</h1>
          <Button onClick={handleLogout} variant="outline" size="lg">
            Sair
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-4 pb-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-gray-600 text-lg">Gerencie suas criações</p>
          </div>
          
          {/* Add Photo Button */}
          <div className="mb-8 text-center">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="px-8 py-3">
                  <Plus className="mr-2 h-5 w-5" />
                  Adicionar Nova Foto
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Adicionar Nova Foto</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  {/* Drag and Drop Area */}
                  <div className="grid gap-2">
                    <Label>Imagem</Label>
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                        isDragOver 
                          ? 'border-primary bg-primary/5' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {newPhoto.url ? (
                        <div className="relative">
                          <img
                            src={newPhoto.url}
                            alt="Preview"
                            className="max-h-40 mx-auto rounded-lg object-cover"
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            className="absolute top-2 right-2"
                            onClick={() => setNewPhoto(prev => ({ ...prev, url: '' }))}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Upload className="h-8 w-8 mx-auto text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-600">
                              Arraste uma imagem aqui ou{' '}
                              <label className="text-primary cursor-pointer hover:underline">
                                selecione um arquivo
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={handleFileSelect}
                                  className="hidden"
                                />
                              </label>
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              PNG, JPG, GIF até 10MB
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* URL Input Alternative */}
                  <div className="grid gap-2">
                    <Label htmlFor="url">Ou cole uma URL da imagem</Label>
                    <Input
                      id="url"
                      value={newPhoto.url}
                      onChange={(e) => setNewPhoto({ ...newPhoto, url: e.target.value })}
                      placeholder="https://exemplo.com/imagem.jpg"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="title">Título</Label>
                    <Input
                      id="title"
                      value={newPhoto.title}
                      onChange={(e) => setNewPhoto({ ...newPhoto, title: e.target.value })}
                      placeholder="Digite o título da foto"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="caption">Legenda</Label>
                    <Textarea
                      id="caption"
                      value={newPhoto.caption}
                      onChange={(e) => setNewPhoto({ ...newPhoto, caption: e.target.value })}
                      placeholder="Digite uma legenda para a foto"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancelar
                  </Button>
                  <Button onClick={handleAddPhoto} disabled={!newPhoto.url || !newPhoto.title}>
                    Adicionar
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          {/* Photos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map(photo => (
              <Card key={photo.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={photo.url} 
                      alt={photo.caption} 
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
        </div>
      </div>
    </div>
  );
};

export default EditableGallery;
