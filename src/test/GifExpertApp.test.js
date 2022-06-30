import React from "react";
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";


describe('Pruebas en <GifExpertApp />', () => {

    test('debe mostrarse correctamente', () => { 

        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();


    });


    test('debe mostrar una lista de categorias', () => {

        // cuando se inicializa el componente GifExpertApp entonces deberiamos tener dos GifGrid

        const categories = ['Dragon Ball', 'Futurama'];

        //defaultCategories es un arreglo y se envia por defecto.
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        //se esperaria que el wrapper.toMatchSnapshot // para asegurarse que todo este igual.

        expect(wrapper).toMatchSnapshot();

        //se esperaria que el wrapper. encuentre GifGrid y cierta longitud, en este caso la misma cantidad de categorys 
        expect(wrapper.find('GifGrid').length).toBe(categories.length );

    })

})