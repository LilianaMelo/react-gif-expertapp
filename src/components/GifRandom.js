
export const GifRandom  = async (category) =>  {

    // trae las imgs aleatorias.
    
    const url = `https://api.giphy.com/v1/gifs/random?q=${encodeURI(category)}&rating=g&api_key=CgsE47b51eLpijMbALWycMxgZ76uzGiP&limit=1 `;

    const resp = await fetch(url);// busca la url.
    const {data} = await resp.json(); // info en formato json

    const randomImg = data.map( img => { // extraer información.

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized.url // images? es para preguntar que si vienen las imagenes que las utilice y las muestre.

        }
    }) 

    return randomImg;
    //console.log(randomImg);
    // .then((random_id) => console.log(random_id));

}
