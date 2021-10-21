import React from 'react'
import { secondContext } from './1-context-api'
const ComponentB = () => {
    return (
        <div>
            <secondContext.Consumer>
                {
                    value=>{
                        return <div>
                            <h1> My name is {value}</h1>
                        </div>
                    }
                }
            </secondContext.Consumer>
        </div>
    )
}

export default ComponentB
