import React,{useReducer} from 'react'

//reducer function
const reducer = (state, action)=>{

//point to remember is that while returning we have to pass on the similar name for the object as we are refrencing the name on our HTML return statement refer to line no 29 for refrence
    if(action.type==='increment'){
        return {firstCounter: state.firstCounter+1}
    }
    else if(action.type==='decrement'){
        return {firstCounter:state.firstCounter-1}
    }
    else{
        return {
            firstCounter: initialState.firstCounter
        }
    }

}

const initialState = {
    firstCounter : 0
}
const ReducerObject = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
           <h1>{state.firstCounter}</h1> 

           {/* type refers to the action what type its of string */}
           <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
           <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
           <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}

export default ReducerObject
