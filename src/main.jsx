import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './Components/NavBar.jsx'
import AppRouter from './Router/AppRouter.jsx'
import Footer from './Components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <NavBar/>
    <AppRouter/>
    <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
