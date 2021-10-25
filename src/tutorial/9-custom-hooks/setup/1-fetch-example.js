import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  const {loading, data, error} = useFetch(url);

  return <>
  <h1>{loading?"Loading" : "...data"}</h1>
  
  </>

}

export default Example
