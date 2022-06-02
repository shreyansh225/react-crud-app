import React, {useState, useEffect}  from 'react'
// import {Form, FormGroup, Button, Label, Input } from 'reactstrap'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Update() {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[ID, setID] = useState(null);
    const sendDataToAPI = () => {
        // e.PreventDefault();
        axios.put(`https://627fa751b1cc1b12625886d2.mockapi.io/crud/${ID}` , {
            firstName,
            lastName
        })
        .then(res => console.log('posting data', res))
        .catch(err => console.log(err))

        console.warn(firstName, lastName);

        console.log(firstName);
        console.log(lastName);    
    }

    useEffect(() => {
        setFirstName(localStorage.getItem('firstName'));
        setLastName(localStorage.getItem('lastName'));
        setID(localStorage.getItem('ID'));
    }, [])
    
  return (
    
        <div className='contentBox'>
            <div className="formBox">
                <h2> Update Data</h2>
                    <form>
                        <div className="inputBox">
                            <span> First Name </span>
                            <input  name="fname" value={firstName} onChange= {(e) => setFirstName(e.target.value)}  placeholder='Enter first name' />
                        </div>
                        <div className="inputBox">
                            <span> Last Name </span>
                            <input name="lname" value={lastName} onChange= {(e) => setLastName(e.target.value)}  placeholder='Enter last name'/>
                        </div>
                        {/* <div className="remember">
                            <label><input type="checkbox" name="" id="" /> Remember me</label>
                        </div> */}
                        <div className="inputBox">
                            <Link to ='/read'>
                                <input type="button" onClick={sendDataToAPI} value="Update" className="update" />
                            </Link>
                        </div>
                    </form>
            </div>
        </div>
    
  )
}

export default Update;
