import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
// Este componente se encarga de mostrar un formulario de entrada donde los usuarios pueden escribir nuevas categorías. 
// El componente recibe una función onNewCategory como una prop, que se utiliza para agregar la nueva categoría ingresada por el usuario.

  const [inputValue, setInputValue] = useState('');

  const handleChange = ({target}) => {
    //Actualiza el estado inputValue cada vez que el usuario escribe en el campo de entrada.
    setInputValue(target.value) 
  }

  //Maneja el envio del formulario
  const onSubmit = (e) => {
    e.preventDefault();
    
    // Verifica si inputValue tiene una longitud mayor a 1 después de eliminar los espacios en blanco,si no cumple no retorna nada
    if (inputValue.trim().length <=1) return; 

    //Si cumple con este criterio, llama a la función onNewCategory pasándole la categoría ingresada
    onNewCategory(inputValue.trim());
    //Reestablece el estado inputValue a una cadena vacía para permitir la siguiente entrada.
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        className="form-control" 
        placeholder="Buscar gifs" 
        value={inputValue} 
        onChange={handleChange}
      />  
    </form>
  )
}
