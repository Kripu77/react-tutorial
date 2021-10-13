import React,{useState} from 'react'

const Testt = () => {
    const[userDetails, setUserDetails] = useState({fName:"", lName:"", email:""})
const [finalDetails, setFinalDetails] = useState([])



    const handleSubmit = (e)=>{
        e.preventDefault();
        const {fName, lName, email} = userDetails;
if(fName && lName &&email){
    const details = [userDetails]
    console.log(details);
    setFinalDetails({...finalDetails, details})
        
    }
    }





    //the handle change function
    const handleChange = (e)=>{
const name =  e.target.name;
const value=  e.target.value;


setUserDetails({...userDetails, [name]:value})
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
