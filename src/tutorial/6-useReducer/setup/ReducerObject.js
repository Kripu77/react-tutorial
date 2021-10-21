
import React,{useState, useReducer} from 'react'
import {data} from '../../../data.js'
import ModalX from './ModalX'
import Modalx from './ModalX'

//reducer

const reducer = (currentState, action)=>{
if(action.type==='entered'){
    return {...currentState, people:[data], isModalOpen:true, modalContent:"value updated"}
}
}

const initialState= {
    people:[],
    isModalOpen:false,
    modalContent:""
}
const ReducerObject = () => {

    const[name, setName]= useState('')
    // const[isModalOpen, setIsModalOpen] = useState(false)
    const [state, dispatch] = useReducer(reducer, initialState)



    //handle submit
    const handleSubmit = (e)=>{
e.preventDefault();
if(name&&'truthy'){
    dispatch({type:"entered"})
  
}
    }
    return (
        <div>
       {state.isModalOpen? <ModalX modalContent={state.modalContent} isModalOpen={state.isModalOpen}/>:""}
       <form className='form' onSubmit={handleSubmit}>
           <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
           <button type='submit'>Submit</button>
       </form>
        </div>
    )
}

export default ReducerObject
