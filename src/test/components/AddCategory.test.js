import React from "react"; // se importa react porque se esta usando jsx
import "@testing-library/jest-dom";

import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";


describe('Pruebas en <AddCategory />', () => { 

    const setCategories = jest.fn(); // jest.fn es una funcion de jest, para evaluar ciertas cosas de jest. permite saber su uso. ej: llamados. // Aquí se debe quitar () => para que funcione
    let wrapper = shallow( <AddCategory setCategories={setCategories} />); 


    //  beforeEach ciclo de vida de las pruebas (antes de cada prueba. //

    beforeEach( () => { // se ejecuta todo lo que se reinicie y se limpie.

        jest.clearAllMocks(); // hace que todo se limpie. ej. simulaciones.
        wrapper = shallow( <AddCategory setCategories={setCategories} />); 

    }) /* ;*/



    test("debe mostrarse correctamente", () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('debe de cambiar la caja de texto', () => { 

        const input = wrapper.find('input');
        const value = "Hola Mundo";

        // Simulamos el onChange del input y además le asignamos un objeto que contiene un target y a su vez este contiene un value
        input.simulate("change", { target: {value} }); // es el mismo onChange no va el on.

        expect(wrapper.find("p").text().trim()).toBe(value); 

    })


    test('NO debe postear la información con onSubmit ', () => { 
        
        // Debemos simular el submit y enviarle el evento con preventDefault y una función con ella de dos formas posible:.

        wrapper.find("form").simulate("submit", { preventDefault(){} }); // tambien se podria escribir asi: ,{ preventDefault: () => {} }

        expect(setCategories).not.toHaveBeenCalled(); // no se tiene que haber llamado.
        // .not.toHaveBeenCalled(); No puede llamar la funcion (con base a la condición: if inputValue.trim().length > 2)

    })


    // tarea:
    test('debe llamar el setCategories y limpiar la caja de texto', () => { 

        const value = "Hola Mundo";
        const input = wrapper.find('input'); // El profe no uso esta const

        // 1. simular el inputChange
        
        input.simulate('change', {target: {value}});

        //wrapper.find('input').simulate('change', {target: {value}}); // es un objeto dentro de otro objeto. esta es la forma de hacerlo del profe.

        // 2. simular el submit
        
        
        wrapper.find('form').simulate('submit', { preventDefault(){} }); // es un objeto dentro de otro objeto. esta es la forma de hacerlo del profe.


        // 3. setCategories se debe haber llamado.
        expect(setCategories).toHaveBeenCalled();
        //expect(setCategories).toHaveBeenCalled(1);
        

        // 4. el valor del input debe de estar vacio ""
        
        //expect(input.prop('value')).toBe('');
        
        expect(wrapper.find('input').prop('value') ).toBe('');

    })

 })