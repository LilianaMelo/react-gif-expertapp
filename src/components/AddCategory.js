// En react 18 no es necesario importar React.
import React, { useState } from "react";
import { PropTypes } from "prop-types";

// cada componente puede tener su propio estado o hook o useStates

//GifExpertApp
// (props) es una forma de hacerlo
// se desestructura los argumentos del componenete
export const AddCategory = ( {setCategories, categories} ) => {
    
    const [inputValue, setInputValue] = useState(""); // la caja de texto tiene un estado, para saber lo que la persona esta escribiendo (input :: Add Category). 
    // inputValue:: valor de entrada, setInputValue:: establecer valor de entrada.
    
    // inputValue:: por defecto tiene el valor de Hola Mundo, un string, un arreglo o un objeto.

    //const [gifRandom, setGifRandom] = useState("");
    
    const onInputChange = (e) => {  // extraer la informacion de onChange y recibimos el evento (e).

        // if (categories.includes(setCategories)) return;

        //console.log(e.target.value);
        setInputValue(e.target.value); // con esto permite hacer cambios en el input o barra.
        //console.log("onInputChange llamado prueba")
    }

    const onSubmit = (e) => {

        e.preventDefault(); // prevenir el comportamiento por defecto del navegador.
        //console.log("onSubmit", inputValue);

        // .trim :: elimina los espacios en blanco al inicio y al final del string.

        if ( inputValue.trim().length > 2 ) {
            setCategories( categorias => [ inputValue, ...categorias ]); // los ... permiten agregar un nuevo item. la desestructuracion 
            setInputValue("");
        } else {
            
            alert("No se encontro: " + inputValue +", intente nuevamente con otra palabra");
        } 
        
    }
    
    /*
    const changeSubmit = (e) => {

        e.preventDefault(); // prevenir el comportamiento por defecto del navegador.
        
        if (gifRandom) {
            setCategories(categorias => [gifRandom, categorias]);
            setGifRandom("");
        }    
    } */
    
    
    return ( // primero hace el return y muestra la información // snapshot
        <form onSubmit={onSubmit}>  {/* el form y el onSubmit quita el refres de la pagina*/} {/* se llama a la constante*/}

            {/* <h1>{inputValue}</h1> esto muestra en una linea lo que se escribe en el input.*/}
            
            {/*<p>{inputValue}</p>  se borra esta opcion */}
            {/*<h2>Add Category</h2> se borra esta opcion  */}

            <input 
                type="text" // cada uno de estos son las props
                placeholder="Buscar gifs"
                value={inputValue} // muestra el valor de Hola Mundo, pero no deja modificar el input.
                onChange={ onInputChange } // es para cambiar el valor o el contenido del input. // e es el evento // Luego llamamos a onInputChange para 
                /* se llama a la constante*/
            />

            <div className="container"> 
                <button onSubmit={onSubmit}>Buscar</button>
                <br />

                {/* <button //  onSubmit={ changeSubmit }
                >
                    Gif Aleatorio
                </button> */}

            </div>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired // definicion de 
}



