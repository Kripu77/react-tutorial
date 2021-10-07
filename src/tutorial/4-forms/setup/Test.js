import React,{useState} from 'react'

const Test = () => {
    const[ firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
const[people, setPeople] = useState([])

    const handleClick = (e)=>{
e.preventDefault();
if(firstName&&lastName){
    const person = {id: new Date().getTime().toString(),firstName, lastName}
    setPeople((prevState)=>[ ...prevState,person])
    console.log(people)
}
    }
    return (
        <article> 
        <div className="form" onSubmit={handleClick}>
        <form>
          <label htmlFor="firstName"> First Name</label>  
          <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
          <br/>
          <br/>
          <label htmlFor="lastName"> Last Name</label>
          <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}></input>
          <br/>
          <button type="submit">Submit</button>
        </form>
        </div>
        <div>
            {people.map((value, index)=>{
                const{id, firstName, lastName} = value;
                return <div key={id}>
                    <h1>{firstName}</h1>
                     </div>
            })}
        </div>
        </article>
    )
}

export default Test
