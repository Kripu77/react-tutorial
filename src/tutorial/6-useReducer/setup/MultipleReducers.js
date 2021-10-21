import React,{useReducer} from 'react'


const initialState = {
    value:0

}

const reducer = (currentState, action)=>{
if(action.type==='increment'){
    return {value: currentState.value+1}
}
else if(action.type==='decrement'){
    return {value: currentState.value-1}
}
else if(action.type==='reset'){
    return {value: initialState.value}
}
}

const MultipleReducers = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
     const [stateTwo, dispatchTwo] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>{state.value}</h1>
            <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
             <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
             <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
<h1>{stateTwo.value}</h1>
            <button onClick={()=>dispatchTwo({type:'increment'})}>Increment</button>
             <button onClick={()=>dispatchTwo({type:'decrement'})}>decrement</button>
             <button onClick={()=>dispatchTwo({type:'reset'})}>Reset</button>
        </div>
    )
}

export default MultipleReducers
