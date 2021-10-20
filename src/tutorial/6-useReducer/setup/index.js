import React, { useState, useReducer, forwardRef, useEffect } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
//used when we have a complicated setup
const reducer = (currentState, action)=>{

}
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
console.log(people)
  const handleSubmit = (e)=>{
e.preventDefault();


if(name && 'true'){
const finalName = {id: new Date().getTime().toString(),name:name}
console.log(finalName)
setPeople((people)=> [...people, finalName]
)
console.log(people)
setModalOpen(true)

}
  }

  //useEffect to control modal

  useEffect(()=>{
    setTimeout(()=>{
      setModalOpen(false)
    }, 3000)
  },[modalOpen])


//test update fn
const updateFn= (id)=>{

  const newList = people.find((people)=>{
    return people.id === id;
  })
  setIsEditing(true)
  setEditID(id)
  console.log(newList)
  setName(newList.name)
}

// if(isEditing===true){
//   setPeople(people.map((value)=>{
  
//     if(value.id===editId){
//       return {...value, name}
//     }
// return value
//   }))
// }




 return <>

 {modalOpen?<Modal/> : ""}
  <form className='form' onSubmit={handleSubmit}>
<input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
<button type='submit'> Submit</button>


  </form>
  <div className='container'>

{
  people.map((value)=>{

    const{id, name}= value;
    return <div key={id}> 
<h1>{name}</h1>
<button onClick={()=>updateFn(id)}>Update</button>


    </div>


  })
}
  </div>
  
  </>
};

export default Index;
