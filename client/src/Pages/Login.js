import React from 'react'
import { useState } from 'react';

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser(e){
    e.preventDefault();

    const response = await fetch('http://localhost:5001/api/login', {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const data = await response.json()

    console.log(data);
  }


  return (
    <div>
      <div>
        <h1>Login</h1>
        <form >
          <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} /><br/>
          <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} /><br/>
          <input type="button" value="Login" onClick={loginUser} />
        </form>
      </div>
    </div>
  );
}

export default Login;
