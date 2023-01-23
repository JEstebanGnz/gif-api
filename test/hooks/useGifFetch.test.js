import { renderHook, waitFor} from "@testing-library/react";
import { useGifFetch } from "../../src/hooks/useGifFetch";

//Vamos a hacer un test de nuestro custom hook


describe('Pruebas sobre el customHook useGifFetch', () => { 
    
    test('Debe retornar un array de imagenes vacio y el mensaje de loading en true', () => { 
        
        //Para poder ejecutar un customHook en un ambiente de prueba, necesitamos usar la libreria renderHook
        
        

       const {result} = renderHook( () => useGifFetch("Madonna"))

       const {images, loading} = result.current;

       expect(images.length).toBe(0);

       expect(loading).toBeTruthy();

     })


     test('Debe retornar un array con imagenes y el mensaje de loading en false', async () => { 
        
        //Aqui es importante entender que debemos hacerle comprender al test que hay que esperar a que se ejecute el useEffect para ahi si proceder y hacer las aserciones.

        const {result} = renderHook(() => useGifFetch("Madonna"))

        await waitFor( () => expect(result.current.images.length).toBeGreaterThan(0))   

        //Con la instruccion waitFor nos encargamos de ESPERAR a que carguen las imagenes debido a la ejecucion del useEffect, es decir del metodo getNewImages.


        const {images, loading} = result.current

        expect(images.length).toBeGreaterThan(0);  //Ya con las imagenes cargadas, hacemos las aserciones de que el array de imagenes debe ser mayor a 0.
        
        expect(loading).toBeFalsy();

 

     })


 })