import React from 'react'
import { userContext} from './1-context-api'
const ComponentA = () => {
    return (
        <div>
          <userContext.Consumer>
              {
                  value=>{
                      return <div>
                          <h1> hi {value}</h1>
                      </div>
                  }
              }

          </userContext.Consumer>
        </div>
    )
}

export default ComponentA
