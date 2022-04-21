//import React, { useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
//import { getGifs } from "./helpers/getGifs";


// coleccion de todos los elementos de esa categoria. // componente que recibe la info de addCategory

export const GifGrid = ({category}) => {


    //CustomHook:

    const {data:images, loading} = useFetchGifs(category);


    
     /* const [images, setImages] = useState([]); // la coleccion por defecto es un arreglo[].

    // useEffect permite ejecutar cierto codigo de forma condicional 
    
    useEffect( () => { // aqui se dispara una sola vez.
        getGifs(category)// aquí solo se ejecuta getGifs() una sola vez.
            .then(setImages) ; 
    }, [category])  // un arreglo o listas de dependencias:: React.DependencyList */
    


    /*
    // peticion http 
    const getGifs = async () => { //  funciones

        // traer imagenes que corresponden a la categoria.
        // peticion de http en javascript
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=CgsE47b51eLpijMbALWycMxgZ76uzGiP`; 

        //  rick and morty se reemplaza por ${ encodeURI( category ) } para especificar la busqueda ej: dragon ball. //es una peticion.

        const respuesta = await fetch(url); // busca la url.
        const {data} = await respuesta.json();// informacion en formato json.

        const gifs = data.map( img => { // extraer informacion
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url // images? es para preguntar que si vienen las imagenes que las utilice y las muestre.
            }
        })

        console.log(gifs);
        setImages(gifs);
    }
    */

    //getGifs(); esto genera hace que se ejecute nuevamente toda la funcion de getGifs
    
    // contenedor de cartas: card-grid
    return (
        <>
            <h3 className="card animate__animated animate__fadeIn"> {category} </h3>

            {loading && <p className="animate__flash">Cargando</p>}

            <div className="card-grid">

                {
                    images.map( img => (
                        <GifGridItem 
                            key={img.id}
                            { ...img} 
                        />
                    ))
                }

                {/* images.map( img => (
                        <li key={img.id}> { img.title } </li>
                    )) esto para hacer la prueba antes de hacer el llamado del componente GifGridItem  * */}

            </div> 
        </>
    )
}