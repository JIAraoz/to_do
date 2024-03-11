import Login from './components/Form/Login'
import Home from './components/Form/Home,/Home'
import { Route,Routes } from 'react-router-dom'

function App() {
  
 
  return(
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Home'element={<Home></Home>}/>
    </Routes>
  )
  
  
}

export default App
