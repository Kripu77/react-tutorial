import React,{useReducer} from 'react'

//reducer fn
const reducer = (currentState, action) =>{

   

    if(action.type === 'increment'){
        return {firstCount: currentState.firstCount+1}
    }
    else if(action.type === 'decrement'){
        return {firstCount:currentState.firstCount-1}
    }
    else if(action.type ==='reset'){
        return {firstCount:initialState.firstCount}
    }

}


//initial state value
const initialState = {
    firstCount :0
};
const ReducerObject = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <p></p>
            <h1> {state.firstCount}</h1>
            <button onClick={()=>dispatch({type:'increment'})}> Increment</button>
             <button onClick={()=>dispatch({type:'decrement'})}> decrement</button>
              <button onClick={()=>dispatch({type:'reset'})}> Reset</button>
        </div>
    )
}

export default ReducerObject
