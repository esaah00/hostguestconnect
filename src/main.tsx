import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PropertyDetails from './components/PropertiesDetails.tsx'
import About from './components/About.tsx'
import SignUp from './components/Signup.tsx'
import Login from './components/Login.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
<Route path='/' element={<App />}/>
<Route path='/property/:id' element={<PropertyDetails />}/>
<Route path="/about" element={<About />} />
<Route path="/signup" element={<SignUp />} />
<Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
