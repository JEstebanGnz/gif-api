import PropTypes from 'prop-types';


export const GifDistribution = ({title, image}) => {
    
    return (
    <div className='card'>
    
    <img src={image} alt={title}/>
    <p> {title}</p>


    </div>
  )
}

GifDistribution.propTypes = {

  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired

}