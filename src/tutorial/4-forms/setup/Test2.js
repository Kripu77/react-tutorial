import React,{useState} from 'react'

const Testt = () => {
    const[userDetails, setUserDetails] = useState({fName:"", lName:"", email:""})

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    //the handle change function
    const handleChange = ()=>{

    }
    return (
        <div>
      
  <div className='form'>
                
     
        <form onSubmit={handleSubmit}> 
            <label htmlFor='fName'> First Name</label>
            <input type="text" id="fName" name="fName" value={userDetails.fName} onChange={handleChange}></input>
            <br/>
            <br/>
             <label htmlFor='LName'> Last Name</label>
            <input type="text" id="lName" name="lName" value={userDetails.lName} onChange={handleChange}></input>
            <br/>
            <br/>
             <label htmlFor='email'> Email</label>
            <input type="text" id="email" name="email" value={userDetails.email} onChange={handleChange}></input>
            <br/>
            <button type="submit"> Submit</button>

          

            
        </form>
               </div>
        </div>
    )
}

export default Testt
