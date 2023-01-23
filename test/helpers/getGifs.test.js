import { getGifs } from "../../src/helpers/getGifs";


describe('Pruebas del archivo getGifs', () => {

    test('El metodo debe devolver un conjunto de gifs', async () => { 

        const gifs = await getGifs('Madonna');

        expect(gifs.length).toBeGreaterThan(0);  //Con esto nos aseguramos de que por lo menos se haya retornado un gif

        expect(gifs[0]).toEqual({
          
            id: expect.any(String),
            url: expect.any(String),
            image: expect.any(String),
            title: expect.any(String)
             

        })   //Recordemos que el comparador .toEqual es para objetos, se utiliza en principal medida para evaluar que las propiedades de los objetos coincidan
             //Mientras, que el comparador .toBe es para comparar especificamente el texto recibido y el esperado de un metodo.

     })

})