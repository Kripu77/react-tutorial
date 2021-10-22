import React,{useContext} from 'react'
import { userContext, nameContext } from './1-context-api'
const ComponentB = () => {
const user = useContext(userContext);
const name = useContext(nameContext)

    return (
        <div>
            <h1>{user}, {name}</h1>
        </div>
    )
}

export default ComponentB
