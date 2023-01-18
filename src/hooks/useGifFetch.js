import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useGifFetch = (category) => {
 
    const [images, setImages] = useState([ ]);

    const [loading, setIsLoading] = useState(true);

    const getNewImages = async () =>{
  
    const newImages = await getGifs(category);
  
    setImages(newImages);

    setIsLoading(false);

    }
  
    useEffect(() => {getNewImages()}, [ ]);

  return {

     images: images,
     loading: loading


  }

}
