import React, { useState } from "react";
import './css/login.css'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Loader from "react-spinners/DotLoader";


function Login(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [loading,setLoading]=useState(false);

    async function loginUser(event){
        setLoading(true)
        event.preventDefault();
       
        try{const obj=await fetch('https://mylinktree.onrender.com/auth/signin',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email,password})
        })
        
        const data=await obj.json();
        
        if(data.user){
            localStorage.setItem("token",data.user)
            alert('login succesfull')
            setLoading(false)
            window.location.href='/dashboard';
        }
        else{
            alert('check your credentials')
            setLoading(false)
        }}
        catch(err){
            alert("server error");
            setLoading(false)
        }

    }


    useEffect(()=>{
        const token=localStorage.getItem('token');
        if(token){
            window.location.href='./dashboard'
        }
    },[])

    return <div className="Login">
        {loading ? <Loader color="#0f1f64" size={90} className="dotloading"/> : <div className="center-div">
            <h1>Login</h1>
            <form onSubmit={loginUser}>
                <input
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type="text"
                placeholder=" Email"
                required
                />

                <input
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type="password"
                placeholder=" Password"
                required
                />
                <p>If new, <Link to="../register">create account here</Link> Or <Link to="../">home</Link></p>
                <input 
                type="submit"
                value='Login'
                />
            </form>
        </div>  }
    </div>
}

export default Login;