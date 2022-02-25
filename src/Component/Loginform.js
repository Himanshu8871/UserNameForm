import React, {useState} from 'react'
const Loginform = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    
    const [allEntry, setAllEntry] = useState([]);
    
    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = {firstname: firstname, lastname: lastname };
    
     setAllEntry([...allEntry, newEntry]);
     console.log(allEntry);
    
    }

    return (
        <div className="form">
            <form action=""  onSubmit={submitForm}>
                <div>
                <label htmlFor="Firstname"><h3>First:name</h3></label>
                <input type="firstname"name="Firstname"id="Firstname" autoComplete="off"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}

                />
                </div>
        <br/>
                <div>
                <label htmlFor="Lastname"><h3>Last:name</h3></label>
                <input type="lastname"name="Lastname"id="Lastname"  autoComplete="off"
                   value={lastname}
                   onChange={(e) => setLastname(e.target.value)}
               />
                </div>
 
       <br/>

         <button type="submit">Submit</button>
            </form>

           <div>
               {
                   allEntry.map((curElem) =>{
                       return(
                           <div  className='showDeta'>
                            <p>{curElem.firstname}</p>
                            <p>{curElem.lastname}</p>
                           </div>
                       )

                   })
                   
               }
           </div>

        </div>
    )
}
 export default Loginform;