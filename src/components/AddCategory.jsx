import { useState } from 'react';

// este componente recibe una funcion que guarda el registro del formulario
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const hanleInputOnChange = ({target}) => {
        setInputValue(target.value);
    }

    const handleOnsubmit = (event) => {
        event.preventDefault();

        let texto = inputValue.trim();

        //validar el valor del input antes de insertar
        if(texto.length <= 1) return;

        //agregar el valor a la funcion que envia el componente padre (esta funcion gestiona agregar un nuevo registro)
        onNewCategory(texto)
        setInputValue('');
    }

  return (
    <form onSubmit={(event) => handleOnsubmit(event)}>
        <input 
            type="text"
            placeholder='Buscar gif'
            value={inputValue}
            onChange={hanleInputOnChange}
        />
    </form>
  )
}
