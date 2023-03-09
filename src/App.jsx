import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import LoginPage from './Pages/LoginPage/LoginPage.jsx';
import SearchPage from './Pages/SearchPage/SearchPage.jsx';
import ProfilePage from './Pages/ProfilePage/ProfilePage.jsx';
import SavedPage from './Pages/SavedPage/SavedPage.jsx';
import NavBurger from './Components/NavBurger/NavBurger.jsx'
import SignUpPage from './Pages/LoginPage/SignUpPage.jsx'
import Footer from './Components/Footer/Footer';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      { loggedIn && <NavBurger/> }
      <Routes>
        <Route path='/' element={<Navigate to='/login' replace />}/>
        <Route path='/login' element={<LoginPage setLoggedIn={setLoggedIn} />} />
        <Route path='/signup' element={<SignUpPage setLoggedIn={setLoggedIn} />} />
        <Route path='/search' element={<SearchPage setLoggedIn={setLoggedIn} />} />
        <Route path='/profile' element={<ProfilePage setLoggedIn={setLoggedIn} />} />
        <Route path='/saved' element={<SavedPage setLoggedIn={setLoggedIn} />} />
      </Routes>
      { loggedIn && <Footer/> }
    </div>
  )
}

export default App

