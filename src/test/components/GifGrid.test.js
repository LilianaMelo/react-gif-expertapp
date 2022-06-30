import React from "react";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs'); // finguir cualquier llamado a ese archivo, y suponer y controlar la informacion que eso va a responder

// 1. mock son funciones simuladas, permiten probar los enlaces entre el código, borrando la implementación real de una función


// Pruebas unitarias.
describe('Pruebas en el <GifGrid />', () => {

    const category = "Dragon Ball";

    test('debe mostrarse correctamente', () => {

        // aqui se falsea la data, es decir no se esta usando el componente de  useFetchGifs, para este caso de la prueba.
        
        // falsa implementacion. 1.
        
        useFetchGifs.mockReturnValue({ // retorna el valor de la funcion simulada. (mock)

            //aqui va el objeto lo que devuelve la funcion useFetchGifs
            data: [],
            loading: true
        });  

        const wrapper = shallow(<GifGrid category={category}/>); // wranner nombre de la constante puede cambiar. 

        expect(wrapper).toMatchSnapshot();

    });


    test('debe mostrar items cuando se cargan imágenes useFetchGifs', () => { 

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/casa/verde.jpg',
            title: 'Cualquier cosa'
        }];

        // mock imitar, fingir algo, para que el componente aqui crea que tiene la informacion o la data con el custom hook cuando ya la cargo.

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });  


        const wrapper = shallow(<GifGrid  category={category} /> );

        //expect(wrapper).toMatchSnapshot(); //no se evalua con el MatchSnapshot().

        // busque todos los parrafos en html existentes. toBe que se espera (false)
        
        expect(wrapper.find('p').exists()).toBe(false);

        // busque los gifs y saber cuantos elementos hay. y esperaria la cantidad de gifs.
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
         // con estas dos expect son más precisas las pruebas.
    })

})