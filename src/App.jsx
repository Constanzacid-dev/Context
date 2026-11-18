import React from 'react'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'

export default function App() {
  return (
    <Routes>
      <Route
       path='/'
      element={<HomeScreen/>}/>
      <Route 
      path='/login'
      element={<LoginScreen/>}/>
      <Route
       path='/register'
      element={<RegisterScreen/>}/>
    </Routes>
    )
}
