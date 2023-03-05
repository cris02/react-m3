import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/GetGifs';

// custon hook
export const useFechGifs = (category) => {

  //hook para mostrar las imagenes
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // asigna las imagenes al hook
  const getImages = async () => {
    const dataImages = await getGifs(category);
    setImages(dataImages);
    setIsLoading(false);
  };

  // crear un use efect cuando se agrega una nueva categoria y cuando se cree el componente por primera vez
  useEffect(() => {
    //esta asigna las imagenes al hook
    getImages();
  }, []);

  return {
    imgs: images,
    isLoading,
  };
};
