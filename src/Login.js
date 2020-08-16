import "./Login.css"
import React,{useState} from 'react'
import {Link,useHistory} from  "react-router-dom"
import {auth} from './firebase'
function Login() {
    const history = useHistory();
    const [email,setEmail] =useState('');
    const [password,setPassword] = useState('');
    const login = event =>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                //direct to home page
                history.push("/")
            })
            .catch((e)=>alert(e.message))
    }
    const register = event=>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //logged in and direct it to home page
        })
        .catch((e)=>alert(e.message));
    }
    return (
        <div className="login">
            <Link to="/"> 
                <img className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
                alt=""/>
            </Link>
            <div className="login__container">
                <h1>Login Form</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" onChange={event=>setEmail(event.target.value)}/>
                    <h5>Password</h5>
                    <input type="text" onChange={event=>setPassword(event.target.value)}/>
                    <button onClick={login} type="submit" className="login__signIn">Sign In</button>

                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                    <button onClick={register} className="login__registerButton" type="submit">Create Your Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
