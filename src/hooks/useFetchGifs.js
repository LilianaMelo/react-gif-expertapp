
//use significa que es un hook
// hook es una función. y tiene el trabajo más pesado.

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


// El CustomHook es una funcion component y se extrae una pequeña logica para implementar una carga automatica.

export const useFetchGifs = (category) => { // se trae el category o los props dependiendo como se esta haciendo.

    const [state, setState] = useState ({ // estado, indicarle a otros componenetes que lo utilisen cuando algo cambio.

        data: [],
        loading: true

    });

    // los efectos no pueden ser async por esperan algo asincrono.
    useEffect( () => { // en los customhook tambien se pueden hacer efectos. useEffect se realiza cuando cambia la categoria.

        // petición http
        getGifs(category)// pasa una promesa
            .then( imgs => {  

                setState({ // cambia la información.
                    data: imgs,
                    loading: false
                }); 
            }) 

    }, [category]) // aqui se llama la category 


    /*
    setTimeout( () => {
        setState({ // setState es del arreglo de arriba de customHook
            data: [1,2,3,4,5,6,7,8,9,0],
            loading: false
        })
    }, 3000); // esto indica que va a ejecutar lo que esta adentro(setTimeout) a los 3 segundo s

    */
    
    return state; // {data: [], loading: true}  el state es la informacion que tiene el useState... ok
}
