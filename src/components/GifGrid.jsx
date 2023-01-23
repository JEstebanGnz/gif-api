import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { useGifFetch } from '../hooks/useGifFetch';
import { GifDistribution } from './GifDistribution';
import PropTypes from 'prop-types'



export const GifGrid = ({category}) => {
 
   
    const {images, loading} = useGifFetch(category);
      
    return (
  
    <div>

     {loading && (<h1> Cargando...</h1>)}

     <h1> {category}</h1> 
        
    <div className='card-grid'> {images.map((image) => (
        
          <GifDistribution
          
          key={image.id}
          {...image}   //Con el spread operator, puedo pasar como props tooodos los elementos del objeto image, algo util ya que al llamarlo en el componente hijo, tengo acceso a todos
          
          ></GifDistribution>
     
    ))}</div>
   
    </div>
  )
}


GifGrid.propTypes ={

  category: PropTypes.string.isRequired,

}