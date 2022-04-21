import React, { Fragment, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
//import { createRoot } from "react-dom/client" // esto en la version 18 de React.

export const GifExpertApp = () => {

    //const categories = ["One Puch", "Samurai X", "Dragon Ball"]; // ESTO SE USA CUANDO LOS ELEMENTOS NO CAMBIAN.

    const [categories, setCategories] = useState([ "Dragon Ball"]); // setCategories es para agregar elementos.


    //const handleAdd = () => {
        // agregar un nuevo item

        //*****// setCategories(["HunterXHunter", ...categories]); de esta forma muestra la informacion de HUNTERXHUNTER al inicio de la lista *******

        // setCategories([...categories, "HunterXHunter"]); // con los ...categories, se añade un nuevo elemento sin la afectar el objeto.        

        //setCategories( categorias => [...categorias, "HunterXHunter"]); // tiene un callback categorias. el primer argunto es el estado anterior.

    //}

    return (

        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

           {/* <button onClick={handleAdd}>Agregar</button> */}

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
            </ol>
        </Fragment>


    )
}
