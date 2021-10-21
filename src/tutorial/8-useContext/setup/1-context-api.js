import React,{useContext} from 'react'
import ComponentA from './ComponentA';

 export const userContext = React.createContext();
const ContextAPI = () => {

  return (
    <div>
      <userContext.Provider value="kripu">

      
      <ComponentA/>
      </userContext.Provider>
    </div>
  )
}

export default ContextAPI;
