import React,{useReducer} from 'react'
//the reducer function
//action is the argument which is resposonsible in controlling the current state
//action provides reducer the information on what task to perform
const reducer = (currentState, action)=>{


    if(action === 'increment'){
        return currentState+1
    }
    else if(action === 'decrement'){
        return currentState-1
    }
    else if(action ==='reset'){
        return initialState
    }
   

}
const initialState = 0
const Reducer = () => {
//using dispatch allows us to execute certain code which is corresponding to particular action

   const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>{state}</h1>
          <button onClick={()=>dispatch('increment')}>Increment</button>  
           <button onClick={()=>dispatch('decrement')}>Decrement</button>  
 
         <button onClick={()=>dispatch('reset')}>Reset</button>  
      

        </div>
    )
}

export default Reducer
