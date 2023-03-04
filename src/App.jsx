import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import LoginPage from './Pages/LoginPage/LoginPage.jsx';
import SearchPage from './Pages/SearchPage/SearchPage.jsx';
import ProfilePage from './Pages/ProfilePage/ProfilePage.jsx';
import SavedPage from './Pages/SavedPage/SavedPage.jsx';
import NavBurger from './Components/NavBurger/NavBurger.jsx'

function App() {

  return (
    <div className="App">
      <NavBurger/>
      <Routes>
        <Route path='/' element={<Navigate to='/login' replace />}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/saved' element={<SavedPage />} />
      </Routes>
    </div>
  )
}

export default App
