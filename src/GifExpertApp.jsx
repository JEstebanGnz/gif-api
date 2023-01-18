import {useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp = () => {

 

    const [categories, setCategories] = useState(['DBZ'])

    const addCategory = (newCategory) =>{


        if(categories.includes(newCategory)){
            return;
        }

            setCategories([...categories, newCategory]);
                     
    }

    return (
       
        <>

        <h1> GifExpertApp </h1>

        <h2> Categorias </h2>

        <AddCategory onNewCategory = {category => addCategory(category) }/>
     
        <ol>

            {categories.map(category => 

               <GifGrid
                
               category = {category}
               key= {category} 

               ></GifGrid>

            )}

        </ol>


        </>
        
    );
}





 
export default GifExpertApp;