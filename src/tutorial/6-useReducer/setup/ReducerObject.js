
import React,{useReducer, useState} from 'react'
import { data } from '../../../data';
import Modal from 'react-modal/lib/components/Modal';
import { act } from 'react-dom/test-utils';

Modal.setAppElement("#root");

const reducer =(currentState, action)=>{
    if(action.type==='close'){

        return {...currentState, isModalOpen:false}
    }
    const newList = [...data, action.payLoad]

    if(action.type === 'entered'){
        return {...currentState, people:[...newList], modalContent:"user updated" ,isModalOpen:true}
    }

}

const initialState = {
    people:[],
    isModalOpen:false,
    modalContent:""
}
const ReducerObject = () => {

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(name &&"true"){
            const id = {id:new Date().getTime().toString()}
            dispatch({type:"entered", payLoad:id})
        }

    }
const[name, setName] = useState('')
const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>
{state.isModalOpen?<Modal isOpen={state.isModalOpen}  
style={
    {
        
        content:{
            width:"20vw",
            height:"20vh",
            margin:"20vh auto",
            backgroundColor:"black",
            color:"white"
        }
    }
}>
    <h1>{state.modalContent}</h1>
    <button onClick={()=>{dispatch({type:"close"})}}> Close</button>
</Modal>:""}
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <input type='text' value={name} onChange ={(e)=>setName(e.target.value)}>
                </input>
                <button>Submit</button>
            </form>

            <div>
                {state.people.map((value)=>{
                    const{id, name}= value
                    console.log(name)
                    return <div key={id}>
                        <h1>{name}</h1> </div>

                })}
            </div>
        </div>
    )
}

export default ReducerObject
