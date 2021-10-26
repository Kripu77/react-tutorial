import React from 'react'
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({image, name, price}) => {
  return (
    <div className='product'>
      <h1> {name}</h1>
      <img src={image.url} alt='name'/>
     <p>{price}</p> 
      
    </div>
  )


}

Product.propTypes= {

  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired
}

Product.defaultProps = {
  name: "User",
  image: {url: defaultImage},
  price:3.99
}

export default Product
