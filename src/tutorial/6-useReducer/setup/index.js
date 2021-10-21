import React, { useState, useReducer, forwardRef, useEffect } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
//used when we have a complicated setup
const reducer = (currentState, action)=>{
 if(action.type==='TESTING'){
   //remember to copy the previous values of the state
   return {...currentState, people:data, modalOpen: true, modalContent:'User Created'}

  }
  if(action.type ==='false'){
    return{...currentState, people:data, modalOpen:false, modalContent:''}
  }
};
const initialState={
  people:[],
  modalOpen:false,
  modalContent:'Hola Hola'

}
const Index = () => {
const [ name, setName]= useState('')
  // const[people, setPeople] = useState(data)
  // const[modalOpen, setModalOpen] = useState(false)
  const[state, dispatch] = useReducer(reducer, initialState)
  const[isEditing, setIsEditing] = useState(false)
  const[editId, setEditID] =useState('')

  //prevent default behaviour

  const handleSubmit = (e)=>{
e.preventDefault();


if(name && 'true'){
  dispatch({type:'TESTING'})
const finalName = {id: new Date().getTime().toString(),name:name}
console.log(finalName)




}
  }

//   //useEffect to control modal

//   useEffect(()=>{
//     setTimeout(()=>{
// dispatch({type:'false'})
//     }, 6000)
//   },[name])


//test update fn
// const updateFn= (id)=>{

//   const newList = state.people.find((people)=>{
//     return state.people.id === id;
//   })
//   // setIsEditing(true)
//   // setEditID(id)
//   // console.log(newList)
//   // setName(newList.name)
// }

// if(isEditing===true){
//   setPeople(people.map((value)=>{
  
//     if(value.id===editId){
//       return {...value, name}
//     }
// return value
//   }))
// }




 return <>

 {state.modalOpen?<Modal modalContent={state.modalContent}/> : ""}
  <form className='form' onSubmit={handleSubmit}>
<input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
<button type='submit' onClick={()=>{ setTimeout(()=>{
  console.log('This is me being triggered')
dispatch({type:'false'})
    }, 6000)

}}> Submit</button>


  </form>
  <div className='container'>

{
  state.people.map((value)=>{

    const{id, name}= value;
    return <div key={id}> 
<h1>{name}</h1>
{/* <button onClick={()=>updateFn(id)}>Update</button> */}


    </div>


  })
}
  </div>
  
  </>
};

export default Index;
