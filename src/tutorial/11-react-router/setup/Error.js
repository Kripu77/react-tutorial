import React from 'react'
import {Link} from 'react-router-dom'
const Error = () => {
  return (
    <div>
      <h1> ....Error, I do not exist. Please click on the button below to go back to home</h1>
      <Link to="/">
        <button>HomePage</button>
      </Link>
    </div>
  )
}

export default Error
