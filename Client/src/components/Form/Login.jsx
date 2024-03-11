import { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"


export default function Login(){
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()
    const [access,setAcces]=useState({
        accessValue:""
        ,accessMessage:""

    })
    useEffect(()=>{
        access & navigate('/Home')
    },[access,navigate])

    function handleChange(e){
        if(e.target.name == "email"){
            setEmail(e.target.value)
        }
        if(e.target.name == "password"){
            setPassword(e.target.value)
        }
    }
    function handleSubmit(e){
        e.preventDefault()
        axios.post('http://localhost:3001/login',{
           email:email,
           password:password
        }).then((data)=>{
            setAcces({
                accessValue:data.value,
                accessMessage:""
            })
        }).catch((err)=>{
            setAcces({
                accessValue:err.response.data.value,
                accessMessage:err.response.data.message
            })
        })
    }
    
    return(
        <>
        <form onSubmit={handleSubmit} >
            <label>
                Email:
                <input type="email" value={email} name="email" onChange={handleChange}/>
            </label>
           
            <label>
                Password:
                <input type="password" value={password} name="password" onChange={handleChange}/>
            </label>
         

            <input type="submit" value="Iniciar sesion"/>
        </form>
       <h1>{access.accessMessage}</h1>
        
        
        </>
    
    )
    
}