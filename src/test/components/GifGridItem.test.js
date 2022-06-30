import React from "react";
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem";

/* 
    1. Configurar Enzyme. ok
    2. Enzyme to Json. ok
    3. prueba debe mostrar el componente correctamente
        * shallow
        * wrapper
        * wrapper .toMatchSnapshot()
*/

describe("Pruebas en <GifGridItem>", () => {

    // estos son los datos que se requieren en el componente de GifGridItem por eso se pone title y url.
    const title = "Un título";
    const url = "https://localhost/algo.jpg"; // No existe la imagen.
    const wrapper = shallow( <GifGridItem title={title} url={url} />);

    test("debe mostrar el componente correctamente", () => {

        
        expect(wrapper).toMatchSnapshot(); // se cre el primer snapshot el cual 
    })

    test("debe tener un párrafo con el title", () => {

        const p = wrapper.find("p");// buscar el parrafo
        expect (p.text().trim()).toBe(title);
    })

    test("debe tener la imagen igual al url y alt de los props", () => {

        const img = wrapper.find("img"); // referencia a la imagen.
        
        //console.log(img.props() ); // .html permite ver las propiedades como la url.
        // props permite ver las propiedades. en forma de objeto
        // prop("src") tambien muestra la información. de una sola propiedad.

        expect(img.prop("src")).toBe(url); // la imagen src sea igual al url.

        expect(img.prop("alt")).toBe(title); //que el alt de la imagen sea igual al title

    });



    test("debe tener animate__fadeIn", () => {

        const div = wrapper.find("div");

        //console.log(div.prop("className"));
     
        const className = div.prop("className");
        
        //animate__fadeIn

        expect(className.includes("animate__bounce")).toBe(true);
    })

})