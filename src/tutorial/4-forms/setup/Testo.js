import React,{useState} from 'react'

const Testo = () => {
const[list, setList] = useState({name:"", day:"", prority:""})
const [fnlList, setFnlList] = useState([])
    
    //to handle submity
const handleSubmit = (e)=>{

    e.preventDefault();
    const {name, day, prority} = list;

    if(name && day && prority){
const allList = {id:new Date().getTime().toString(), ...list}
setFnlList((prevState)=>[...prevState, allList])
console.log(fnlList)
setList({name:"", day:"", prority:""})
    }
}

//to handle input chanfge
const handleChange =(e)=>{

    const name = e.target.name;
    const value = e.target.value;
    //everytime we add some stuff we want to keep track of it hecne use the spread operator to include it
    setList({...list, [name]:value})
}

//to remove to do
const removeTo = (id)=>{
setFnlList(fnlList.filter((value)=>{
    return value.id != id;
}))
} 
    return (
        <div className="form" onSubmit={handleSubmit}>
     <form>
         <label htmlFor="name"> Name</label>
         <input type="text" id="name" name="name" value={list.name} onChange={handleChange}></input>
         <br/>
              <br/>
         <label htmlFor="day"> Day</label>
         <input type ="date" id="day" name="day" value={list.day} onChange={handleChange}></input>
           <br/>
              <br/>
         <label htmlFor="prority"> Priority</label>
         <input type="text" id="prority" name="prority" value={list.prority} onChange={handleChange}></input>
           <br/>
              <br/>
              <button type="submit"> Add</button>
     </form>
     <div>
{
    fnlList.map((value)=>{
        const {id, name, day, prority} = value;
        return <div key={id}>

            <h1> Task:  {name} </h1>
            <h2> Day assigned : {day}</h2>
            <h3> Priority : {prority}</h3>
            <button onClick={()=>removeTo(id)}> Done</button>
            </div>
    })
}

     </div>
        </div>

        
    )
}

export default Testo
