  import React, { createContext, useEffect, useState } from 'react'
  import HomeScreen from './Pages/HomeScreen'
  import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
  import LoginScreen from './Pages/LoginScreen/LoginScreen.jsx';
  import { getAuth,onAuthStateChanged } from 'firebase/auth';
  import {firebaseApp} from './firebase'
  import ProfileScreen from './Pages/ProfileScreen';

  export const userContext = createContext();
   

  const App = () => {

    const [contextUser,setContextUser] = useState(null)
    
    const auth = getAuth(firebaseApp)

    useEffect(()=>{

      //firebase automatically stores the details in local memory
      const unsubscribe = onAuthStateChanged(auth,userAuth=>{
        if(userAuth){
          setContextUser({
            uid:userAuth.uid,
            email:userAuth.email
          })
        }
        else{
          setContextUser(null)
        }
      }) 
      return unsubscribe;
    },[])
    console.log(contextUser)

    return (
      <userContext.Provider value={{contextUser}}>
      <Router>
          {!contextUser ? (<LoginScreen/>):(
            <Routes>
              <Route exact path="/" element={<HomeScreen/>} />   
              <Route exact path='/profile' element={<ProfileScreen/>}/>
            </Routes> 
            )}
      </Router>
      </userContext.Provider>
    )
  }

  export default App
