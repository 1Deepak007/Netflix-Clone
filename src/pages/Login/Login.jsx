import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets_1/logo.png'
import { login, signup } from '../../../firebase'

const Login = () => {

  const [signState, setSignState] = useState('Sign In');
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');


  const user_auth = async (event) => {
    event.preventDefault();
    if(signState==="Sign In"){
      await login(email, password)
    }
    else{
      await signup(name, email, password)
    }
  }

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
          {
            signState === "Sign Up" ?
              <input value={name} onChange={(e) => { setname(e.target.value) }} type="text" placeholder="Name" />
              : <></>
          } 
          <input value={email} onChange={(e) => { setemail(e.target.value) }} type="text" placeholder="Email" />
          <input value={password} onChange={(e) => { setpassword(e.target.value) }} type="text" placeholder="Password" />

          <button onClick={user_auth} type='submit' className='signuplogin-btn'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          {signState === "Sign In" ?
            <p>New to Netflix? <span onClick={() => { setSignState("Sign Up") }}>SignUp Now</span></p>
            : <p>Already have acount? <span onClick={() => { setSignState("Sign In") }}>SignIn Now</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login
