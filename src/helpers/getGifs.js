
// se copia la const de getGifs.
// peticion http 

export const getGifs = async (category) => { 

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

    return gifs;
    
}