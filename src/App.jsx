import React from 'react'
import axios from 'axios'
import HomeScreen from './Pages/HomeScreen'
import request from './request'

const App = () => {
  const baseURL = 'https://api.themoviedb.org/3';
  return (
    <>
      <HomeScreen/>
    </>
  )
}

export default App
