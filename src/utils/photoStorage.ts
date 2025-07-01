
interface Photo {
  id: number;
  url: string;
  title: string;
  caption: string;
}

const PHOTOS_STORAGE_KEY = 'gallery-photos';

export const getStoredPhotos = (): Photo[] => {
  try {
    const stored = localStorage.getItem(PHOTOS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Erro ao recuperar fotos do localStorage:', error);
    return [];
  }
};

export const savePhotos = (photos: Photo[]): void => {
  try {
    localStorage.setItem(PHOTOS_STORAGE_KEY, JSON.stringify(photos));
  } catch (error) {
    console.error('Erro ao salvar fotos no localStorage:', error);
  }
};

export const addPhoto = (photo: Omit<Photo, 'id'>): void => {
  const existingPhotos = getStoredPhotos();
  const newPhoto: Photo = {
    ...photo,
    id: Date.now()
  };
  const updatedPhotos = [...existingPhotos, newPhoto];
  savePhotos(updatedPhotos);
};

export const getDefaultPhotos = (): Photo[] => {
  return [
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
  ];
};

export const getAllPhotos = (): Photo[] => {
  const defaultPhotos = getDefaultPhotos();
  const storedPhotos = getStoredPhotos();
  return [...defaultPhotos, ...storedPhotos];
};
