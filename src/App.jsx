import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import Create from './Create'
import Update from './Update'
import Read from './Read'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>

    <Route path='/' element={<Home/>}></Route>
    <Route path='/create' element={<Create/>}></Route>
    <Route path='/update/:id' element={<Update/>}></Route>
    <Route path='/read/:id' element={<Read/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
