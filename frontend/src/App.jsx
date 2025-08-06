import React from 'react'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Register from './pages/AuthPages/register.jsx';
import Comapny from './pages/Dashboards/comapny.jsx';
import Student from './pages/Dashboards/student.jsx';
const App = () => {

  
  return (
    <div className='text-red-500'>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/company" element={<Comapny />} />
          <Route path="/dashboard/student" element={<Student />} />
        </Routes>
      </Router>
   
    </div>
  )
  
}

export default App
