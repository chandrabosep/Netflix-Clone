import React from 'react'
import HomeScreen from './Pages/HomeScreen'
import Login from './Pages/LoginScreen/LoginScreen';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import LoginScreen from './Pages/LoginScreen/LoginScreen.jsx';

const App = () => {

  const user={};

  return (
    <Router>
        {!user ? (<Login/>):(
          <Routes>
            <Route exact path="/" element={<HomeScreen/>} />   
            <Route exact path="/login" element={<LoginScreen/>}/>  
            <Route exact path="/dashboard" element={<HomeScreen/>}/>   
          </Routes> 
          )}
    </Router>
  )
}

export default App
