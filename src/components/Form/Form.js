import React, { useState } from 'react'
import './Form.css';
import { addUser } from '../../redux/userSlice';
import { useDispatch } from 'react-redux';

const Form = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const dispatch = useDispatch()
  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(addUser({name,email}))
  }


  return (
    <form onSubmit={handleSubmit}>
        <div className='form-group'>
            <input type='text' placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='form-group'>
            <input type='email' placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='form-group'>
            <input type='submit' placeholder='Add Member'/>
        </div>
    </form>

  )
}

export default Form
