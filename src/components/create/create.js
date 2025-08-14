import React, {useState, useEffect}  from 'react'
// import {Form, FormGroup, Button, Label, Input } from 'reactstrap'
import axios from 'axios';
import { Link,useNavigate  } from 'react-router-dom';

function Create() {
    const navigate = useNavigate();
    // let history = useHistory();
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');

    const sendDataToAPI = () => {
        // e.PreventDefault();
        axios.post(`https://627fa751b1cc1b12625886d2.mockapi.io/crud` , {
            firstName,
            lastName
        })
        .then(() => {
            setFirstName('');
            setLastName('');
            alert("Data Added Successfully");
            navigate('/read');  // Redirect to read page
            // history.push('./read');
        }
            // res => console.log('posting data', res)
            )
        .catch(err => console.log(err))

        console.warn(firstName, lastName);
        console.log(firstName);
        console.log(lastName);
        
    }
    
  return (
    
        <div className='contentBox'>
            <div className="formBox">
                <h2> React CRUD Operations </h2>
                    <form>
                        <div className="inputBox">
                            <span> First Name </span>
                            <input  
                            name="fname" 
                            value={firstName}
                            onChange= {(e) => setFirstName(e.target.value)}  
                            placeholder='Enter first name' />
                        </div>
                        <div className="inputBox">
                            <span> Last Name </span>
                            <input 
                            name="lname"  
                            value={lastName}
                            onChange= {(e) => setLastName(e.target.value)}  
                            placeholder='Enter last name'/>
                        </div>
                        {/* <div className="remember">
                            <label><input type="checkbox" name="" id="" /> Remember me</label>
                        </div> */}
                        <div className="inputBox">
                            {/* <Link to ='/read'> */}
                                <input type="button" value="Submit" onClick={sendDataToAPI}  />
                            {/* </Link> */}
                        </div>
                        <div className="inputBox">
                            <Link to ='/read'>
                                <input type="button" value="Show Data"  />
                            </Link>
                        </div>
                    </form>
            </div>
        </div>
    
  )
}

export default Create;
