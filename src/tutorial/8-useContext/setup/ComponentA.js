import React from 'react'
import { userContext, nameContext } from './1-context-api'
const ComponentA = () => {
    return (
        <div>

       <userContext.Consumer>
           {
               status=>{
                   return (
                       <nameContext.Consumer>
                        {name=>{
                            return<div>
                                {
                                    status==="unlogged" && name==="unknown"?<h1>Please log in</h1>:name
                                }
                               
                            </div>
                        }}
                       </nameContext.Consumer>
                   )
               }
           }
           
           
           </userContext.Consumer>     
        </div>
    )
}

export default ComponentA
