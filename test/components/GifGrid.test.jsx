import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useGifFetch } from "../../src/hooks/useGifFetch";

jest.mock("../../src/hooks/useGifFetch");



describe('Pruebas sobre el componente GifGrid', () => { 

    const inputValue = "Madonna";

    test('Se debe mostrar el texto de Cargando....', () => { 
        

        useGifFetch.mockReturnValue({   //Con el metodo mockReturnValue definimos que valores va a retonar el custom hook, en este caso le pedimos que nos devuelva las imagenes y el mensaje de loading en true

            images: [],
            loading: true

        });



        render(<GifGrid category={inputValue}/>)

        expect(screen.getByText("Cargando..."))

        expect(screen.getByText(inputValue))

        screen.debug();

    })

    test('Se debe mostrar la importacion de las imagenes desde el api de gifs', () => { 

        const gifs= [{

            title: "Confessions on a Dance Floor",
            id: "ABC123", 
            image: "https://madonnajump.com"

        }, 
        
        {

            title: "Ray of Light",
            id: "XYZ789", 
            image: "https://madonnafrozen.com"

        }]

        useGifFetch.mockReturnValue({

            images: gifs,
            loading: false

        });


        render(<GifGrid category={inputValue}/>)


        screen.debug();

        expect(screen.getAllByRole('img').length).toBe(2)

     })


})