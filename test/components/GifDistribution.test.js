import { render, screen } from "@testing-library/react"
import { GifDistribution } from "../../src/components/GifDistribution"

//Este componente se encarga de renderizar cada gif y colocarlo dentro del grid asignado para cada categoria


describe('Primera prueba', () => { 

    const title = "Madonna";
    const image = "https://madonnaqueen.com/";
    
    test('EL gif que se renderice debe tener como propiedades el url y el texto alternativo que se le envie como props', () => { 
        
        render(<GifDistribution title={title} image={image}></GifDistribution>)
 
        screen.debug();

        const {src, alt} = screen.getByRole('img');   //Aqui estamos haciendo una desestructuracion de la propiedad getByRole('img') para traernos las propiedades alt y src del atributo img.

        expect(src).toBe(image);
        expect(alt).toBe(title);



     })


     test('Que el titulo del gif aparezca en la pantalla', () => { 

        render(<GifDistribution title={title} image={image}></GifDistribution>)


        expect(screen.getByText(title)).toBeTruthy();

        screen.debug();

      })


 })


 