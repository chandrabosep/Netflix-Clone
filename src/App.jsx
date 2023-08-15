  import React, { useEffect, useState } from 'react'
  import HomeScreen from './Pages/HomeScreen'
  import Login from './Pages/LoginScreen/LoginScreen';
  import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
  import LoginScreen from './Pages/LoginScreen/LoginScreen.jsx';
  import { getAuth,onAuthStateChanged } from 'firebase/auth';
  import {firebaseApp} from './firebase'

  const App = () => {

    const user=null;
    const auth = getAuth(firebaseApp)

    useEffect(()=>{

      //firebase automatically stores the details in local memory
      const unsubscribe = onAuthStateChanged(auth,userAuth=>{
        if(userAuth){
          console.log(userAuth)
        }
      }) 

      return unsubscribe;
    },[])

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
