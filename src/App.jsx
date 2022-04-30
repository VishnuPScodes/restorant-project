import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Admin } from './components/Admin'
import { Navbar } from './components/Navbar'
import { RestorantDetails } from './components/RestorantDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path='/Admin' element={<Admin/>}></Route>
       <Route path='/' element={<RestorantDetails/>}></Route>
     </Routes>
    </div>
  )
}

export default App
