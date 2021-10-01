import React,{useState, useEffect} from 'react'

const Item = () => {
    const[size, setSize] = useState(window.innerWidth);
    const checkSize = ()=>{
setSize(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener('resize', checkSize)
        return ()=>{
            window.removeEventListener('resize', checkSize)
        }
    })
    return (
        <div>
            <h1> {size}</h1>
        </div>
    )
}

export default Item
