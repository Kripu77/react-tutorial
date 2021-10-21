import React from 'react'

import {userContext} from "./1-context-api"
const ComponentA = () => {
    return (
        <div>
            <userContext.Consumer>
            {value=>{
                return <>
                <h1> I am {value}</h1>
                </>

            }}
            </userContext.Consumer>
            
        </div>
    )
}

export default ComponentA
