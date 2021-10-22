import React from 'react'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';


//create context 
export const userContext = React.createContext(); 
export const nameContext = React.createContext();


const contextAPI = () => {
  return (
    <div>
      <userContext.Provider value={"unlogged"}>
        <nameContext.Provider value={"unknown"}>
<ComponentC/>
        </nameContext.Provider>
      </userContext.Provider>
    </div>
  )
}

export default contextAPI
