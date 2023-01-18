import React from 'react'

export const GifDistribution = ({title, image}) => {
    
    return (
    <div className='card'>
    
    <img src={image} alt={title}/>
    <p> {title}</p>


    </div>
  )
}
