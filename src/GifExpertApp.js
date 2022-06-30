// COMPONENTE PADRE
import React, { Fragment, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
//import { GifRandom } from "./components/GifRandom";


export const GifExpertApp = ({ defaultCategories = [] }) => { // defaultCategories añade una propiedad por defecto.

    //const categories = ["One Puch", "Samurai X", "Dragon Ball"]; // ESTO SE USA CUANDO LOS ELEMENTOS NO CAMBIAN.

    const [categories, setCategories] = useState( defaultCategories ); // setCategories es para agregar elementos.
    // defaultCategories añade una propiedad por defecto.

    //const handleAdd = () => {
        // agregar un nuevo item

        //*****// setCategories(["HunterXHunter", ...categories]); de esta forma muestra la informacion de HUNTERXHUNTER al inicio de la lista *******

        // setCategories([...categories, "HunterXHunter"]); // con los ...categories, se añade un nuevo elemento sin afectar el objeto.        

        //setCategories( categorias => [...categorias, "HunterXHunter"]); // tiene un callback categorias. el primer argunto es el estado anterior.
    //}


    return (

        <Fragment>

            <h1>Busca tus gif´s favoritos</h1>
            <AddCategory setCategories={setCategories}/>

        {/*
            <ol>
                <GifRandom   /> 
            </ol>
        */}   
            <hr />

            {/* Esto muestra la constante en el html, los vuelve visible*/}

            <ol>
                {   
                    categories.map(category => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                        
                        
                        //<li key={category}> {category}</li>
                        
                        /* Esto es como un pequeño ciclo. map sirve para transformar los elementos que estan dentro del arreglo.*/
                        /* key es el id de base de datos son unicos.*/
                    ))
                }    

                { /*
                    categories.map(category => (
                        <GifRandom 
                            key={category}
                            category={category}
                        />
                    ))
                    */  }

            </ol>
      
        </Fragment>
    )
}
