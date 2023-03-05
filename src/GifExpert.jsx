import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpert = () => {
  //definir el estado del hook
  const [categories, setCategories] = useState([]);

  //funcion que guarda el registro al arreglo de categorias
  const hanleButon = (onNewCategory) => {
    //validar que no exista el registro en el arreglo
    if (categories.includes(onNewCategory)) return;
    setCategories([onNewCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpert</h1>

      <AddCategory
        // se envia una funcion( es decir una referencia)
        onNewCategory={hanleButon}
      />

      {
        categories.map(category => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
      }
    </>
  );
};
