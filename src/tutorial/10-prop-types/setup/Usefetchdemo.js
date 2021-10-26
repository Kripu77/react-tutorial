import React, {useEffect, useState} from 'react'

export const useFetchdemo = (url) => {
    const [ products, setProduct] = useState([])
    const getData=()=>{
        fetch(url)
        .then((resp)=>resp.json())
        .then((data)=>setProduct(data))
    }

 useEffect(()=>{
        getData();
    },[url])

return {products};


}


