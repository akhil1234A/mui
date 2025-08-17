import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Intro from './pages/Intro'
import AboutPractice from'./pages/AboutPractice'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Intro/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/test" element={<AboutPractice/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
