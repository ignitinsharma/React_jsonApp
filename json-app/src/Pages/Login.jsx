import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const Login = () => {
    const {isAuth,handleToggle}=useContext(AuthContext)
  return (
    <div>

    {/* 
    --> IF user is login in So user will access all of this pages else 
        user can Access only Login or Contact Page

    */}

        <h1>User is {isAuth?"Login":"Logout"} Right now</h1>
        <button onClick={handleToggle}>{isAuth?"Logout":"Login"}</button>
    </div>
  )
}

export default Login