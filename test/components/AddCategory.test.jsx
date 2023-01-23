import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas sobre el componente AddCategory', () => { 

    test('El valor del input debe actualizarse y corresponder al que el usuario digite en el textbox', () => { 
        

        render(<AddCategory onNewCategory={() => {}}></AddCategory>)    //Preparamos el sujeto de pruebas (primera A)

        const input = screen.getByRole('textbox');       //Hacemos referencia al elemento que queremos analizar

        fireEvent.input(input, { target: {value: 'Madonna'} });     //Disparamos el evento deseado
                                                            //En este caso estamos disparando un evento de tipo input, y en el segundo argumento, 
        screen.debug();                                     //le estamos haciendo entender al pc que debe colocar "Madonna" en su propiedad value, es decir en el valor que almacena lo que se esta escribiendo en el input


        expect(input.value).toBe("Madonna");          //Realizamos la asercion de lo que esperamos que suceda.


        
    })


    test('Al enviar el form, el espacio para el input debe quedar completamente en blanco, y la funcion onNewCategory debe utilizar el valor del inputValue', () => { 
        
        const onNewCategory = jest.fn();   //Aqui estamos creando una Mock function

        const inputValue = "Madonna";

        render(<AddCategory onNewCategory={onNewCategory}></AddCategory>)

        const input = screen.getByRole('textbox');

        const myForm = screen.getByRole('form');


        fireEvent.input(input, {target: {value:inputValue}});

        fireEvent.submit(myForm);

        screen.debug();

        expect(input.value).toBe('');

        expect(onNewCategory).toBeCalled();
        
        expect(onNewCategory).toBeCalledTimes(1);

        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    })


    test('no debe llamar al onNewCategory si no hay nada en la caja de texto', () => { 
        
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}></AddCategory>)
      
        const myForm = screen.getByRole('form');

        fireEvent.submit(myForm);

        expect(onNewCategory).toBeCalledTimes(0);


    })

    

 })