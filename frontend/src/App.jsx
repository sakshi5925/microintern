import React from 'react'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Register from './pages/AuthPages/register.jsx';
import Comapny from './pages/Dashboards/comapny.jsx';
import Student from './pages/Dashboards/studentForm.jsx';
import Login from './pages/AuthPages/login.jsx';
const App = () => {

  
  return (
    <div className='text-red-500'>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path="/dashboard/company" element={<Comapny />} />
          <Route path="/dashboard/student" element={<Student />} />
        </Routes>
      </Router>
   
    </div>
  )
  
}

export default App
