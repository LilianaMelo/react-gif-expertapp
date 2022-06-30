import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

// usar snapshoot es para cuando hay algo que renderizar en este caso no se hacer. 
// se usa otra forma para hacer la prueba.

describe('Pruebas en el hook useFetchGifs', () => {

    test('debe retornar el estado inicial', async() => { 

        // Hooks permiten extraer la lógica del componente en funciones reutilizables.

        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('goku') ); // funcion que crea un "componente virtual "  y hay coloca el customHook: son funciones reutilizables. Dentro de los parentesis se llama una función anonima

        const {data, loading} = result.current;

        await waitForNextUpdate();
        //console.log(data, loading); 

        expect(data).toEqual([]); // 
        expect(loading).toBe(true);      

    })

    // segunda prueba

    test('debe retornar un arreglo de imgs y el loading en false', async () => {

        // waitForNextUpdate:: esperar un nuevo cambio en el estado.

        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs("Goku"));
        
        await waitForNextUpdate();

        const {data, loading} = result.current

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });

})