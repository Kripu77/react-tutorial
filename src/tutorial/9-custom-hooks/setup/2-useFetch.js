import React,{useState, useEffect} from 'react'

export const useFetch = (url) => {

  const[loading, setIsLoading] = useState(true)
  const[products, setProducts] = useState([])
  const[ error, setIsError] = useState(false)


  const getData = ()=>{
    fetch(url)
    .then((res)=>{ 
      if(res.status>200|| res.status<299){
        return res.json()

      }
      else{
setIsLoading(false)
setIsError(true)
      }
    })
 
    .then((data)=> {setProducts(data)
    setIsLoading(false)})
  }
  useEffect(()=>{
    getData()
  },[url, products])

  // we need to return something when we pass something as a custom hook

  return {loading, products, error}
}

export default useFetch
