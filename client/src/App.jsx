import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import About from './components/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Projectspage from './components/Projectspage'
import Calendar from './components/Calendar'
import Taskspage from './components/Taskspage'
import Teampage from './components/Teampage'
import Settings from './components/Settings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router> 
      <Navbar /> 
      
      <Routes> 
        <Route path="/" element={<Homepage />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projectspage/>} />
        <Route path="/tasks" element={<Taskspage />} />
        <Route path="/team" element={<Teampage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
      </Router>
    </>
  )
}

export default App

