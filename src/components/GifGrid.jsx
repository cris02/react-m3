import { useFechGifs } from '../hooks/useFechGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {

    // hook personalizado
    const {imgs, isLoading } = useFechGifs(category);

  return (
    <>
        {
            isLoading && (<h2>Cargando...</h2>)
        }
        
        <h3>{category}</h3>
        
        <div className='card-grid'>
            {
                imgs.map((img => (
                    // componente para mostrar los resultados
                    <GifItem 
                        key={img.id}
                        // envia todo el objeto (propagacion)
                        { ... img }
                    />
                )))
            }
        </div>
    </>
  )
}
