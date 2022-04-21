import React from "react";


// export const GifGridItem = (props) => {
export const GifGridItem = ({ title, url}) => {// tambien se puede hacer asi es más entendible. => {
    //console.log(props);
    //console.log({id, title, url});



    return ( // aqui se deja el div para poner o retornar una clase.
        // className = es de estilos en React clase de css.

        <div className="card animate__animated animate__bounce">
            
            <img src={url} alt={title} />
            <p>{title} </p>

        </div>
    )
}