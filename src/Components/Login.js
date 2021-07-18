import React from 'react';
import "../Css/Login.css";
import { auth,provider } from '../FireBase';
import Logo from "../images/Logo.png";
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';


function Login() {
    const [state,dispatch] = useStateValue();
    const handleClick = () =>{
        auth.signInWithPopup(provider).then(result =>{
            console.log(result);
            dispatch({
                type : actionTypes.SET_USER,
                user : result.user,
                
            })
        }).catch(error =>{
            console.log(error.message)
        })
    }
    return (
        <div className="Login">
            <img src={Logo} />
            <h1>Gamer Zone</h1>
            <button onClick={handleClick}>Login</button>
        </div>
    )
}

export default Login
