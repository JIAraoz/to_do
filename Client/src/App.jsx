import Login from './components/Form/Login'
import Home from './components/Home,/Home'
import { useState,useEffect } from 'react'
import { Route,Routes, useNavigate} from 'react-router-dom'
import axios from 'axios'


function App() {
  const [access,setAccess]=useState({
    accessValue:false
    ,accessMessage:""

})
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const navigate=useNavigate()

useEffect(()=>{
       
  access.accessValue && navigate('/home')
},[access.accessValue,navigate])
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
  }).then(({data})=>{
      
      setAccess({
          
          accessValue:data.access,
          accessMessage:data.message
      })
      
  }).catch((err)=>{
     
      setAccess({
          accessValue:err.response.data.access,
          accessMessage:err.response.data.message
      })
  })}
 
  return(
    <Routes>
      <Route path='/' element={<Login handleSubmit={handleSubmit} handleChange={handleChange} access={access} email={email} password={password} />}/>
      <Route path='/home'element={<Home/>}/>
    </Routes>
  )
  
  
}

export default App
