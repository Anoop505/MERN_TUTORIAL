import React from 'react'
import { useState } from 'react';


function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(e){
    e.preventDefault();

    const response = await fetch('http://localhost:5001/api/register', {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })

    const data = await response.json()

    console.log(data);
  }


  return (
    <div >
      <div>
        <h1>Register</h1>
        <form>
          <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/> <br/>
          <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} /><br/>
          <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} /><br/>
          <input type="button" value="Register" onClick={registerUser} />
        </form>
      </div>
    </div>
  );
}

export default Register;
