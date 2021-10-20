import React, {useReducer} from 'react'


const reducer= (currentState, action)=>{
    switch(action){
        case 'increment':
            return currentState+1
            case 'decrement':
                return currentState-1
                case 'reset':
                    return initialState
                    default:
                        return currentState
    }
}

const initialState = 0
const Reducer = () => {

const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={()=>dispatch('increment')}>
                Increment
            </button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}

export default Reducer
