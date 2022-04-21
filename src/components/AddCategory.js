import React, { useState } from "react";
import { PropTypes } from "prop-types";

//GifExpertApp
// (props) es una forma de hacerlo
// se desestructura los argumentos del componenete
export const AddCategory = ( {setCategories} ) => {
    
    const [inputValue, setInputValue] = useState(""); // la caja de texto tiene un estado, para saber lo que la persona esta escribiendo (input :: Add Category). 
    // inputValue:: valor de entrada, setInputValue:: establecer valor de entrada.
    
    // inputValue:: por defecto tiene el valor de Hola Mundo, un string, un arreglo o un objeto.
    
    const handleInputChange = (e) => {  // extraer la informacion de onChange y recibimos el evento (e).

        //console.log(e.target.value);
        setInputValue(e.target.value); // con esto permite hacer cambios en el input o barra.
    }

    const handleSubmit = (e) => {

        e.preventDefault(); // prevenir el comportamiento por defecto del navegador.

        //console.log("Submit Hecho");
        //props.setCategories(); esta es una forma de hacerlo


        // .trim :: elimina los espacios en blanco al inicio y al final del string.
        if ( inputValue.trim().length > 2) {
            setCategories( categorias => [ inputValue, ...categorias ]); // los ... permiten agregar un nuevo item. 
            setInputValue("");
        }

        
        

        
    }
   
    
    return ( // primero hace el return y muestra la información 
        <form onSubmit={handleSubmit}>  {/* el form y el onSubmit quita el refres de la pagina*/} {/* se llama a la constante*/}

            {/* <h1>{inputValue}</h1>     esto muestra en una linea lo que se escribe en el input.*/}
            
            <h2>Add Category</h2>
            <input 
                type="text"
                value={inputValue} // muestra el valor de Hola Mundo, pero no deja modificar el input.
                onChange={ handleInputChange } // es para cambiar el valor o el contenido del input. // e es el evento // Luego llamamos a handleInputChange para 
                /* se llama a la constante*/ 
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired // definicion de 
}