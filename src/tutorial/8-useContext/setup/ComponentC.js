import React ,{useContext}from 'react'
import { userContext, nameContext } from './1-context-api'
const ComponentC = () => {

    //simply wrap my context with the useContext hook from react

    const user = useContext(userContext);
    const name = useContext(nameContext)
    return (
        <div>
            <h1> {name}, {user}</h1>
        </div>
    )
}

export default ComponentC
