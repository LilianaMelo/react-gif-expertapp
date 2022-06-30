// pruebas basicas

import { getGifs } from "../../helpers/getGifs"

describe("Pruebas con getGifs Fecth", () =>  {

    test("debe de traer 10 elementos", async() => { // se cambia esta prueba en async

        const gifs = await getGifs("One Punch"); // nombre de una serie.

        expect(gifs.length).toBe(10); // lo que yo esperaria se esperaban 12 yrecibimos 10, que es el valor que se definio en la api. 

    })

    test('debe traer 10 elementos', async () => { 
        const gifs = await getGifs("");

        //console.log(gifs);

        expect(gifs.length).toBe(0);
    })
})