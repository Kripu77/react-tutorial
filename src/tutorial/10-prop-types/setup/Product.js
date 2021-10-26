import React from 'react'
import PropTypes from 'prop-types'

import defaultImage from '../../../assets/default-image.jpeg'
const Product = ({image, name, price}) => {

  //the data thats coming from the API doesnot have image property for all the array of objects
//hence we have to setup default proptypes in that scenario which will check if the prop is presentt or not
  return (
    <div className='product'>
      <h3>{name}</h3>
      <img src={image.url} alt={name}/>
      <h5>{price}</h5>
    </div>
  )
}

//first step set  the prop types as required attach it to the component
// we have to ensure that we set the prop types corresponding to the object
Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired
}

//then set some default prop types
//foremostly we can also use the ternary operator to check if the value is present or not
Product.defaultProps = {
  name:"user",
  image: {url:defaultImage},
  price: 3.99
}

export default Product
