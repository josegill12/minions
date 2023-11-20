import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Auth = (props) => {
    const currentUser = localStorage.getItem('currentUser');
    let loginCheck  
    currentUser ? loginCheck = true : loginCheck = false
    const [isLoggedin, setIsLoggedin] = useState(loginCheck);
    const navigate = useNavigate();

   
    useEffect(() => { if (!isLoggedin) navigate('/login')},[isLoggedin])
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Auth