import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LoginPage
 from 'Pages/Login'
function RoutesWithoutContext() {
  return (
    <Routes>
        <Route path='/login' element={<LoginPage/>}></Route>
    </Routes>
  )
}

export default RoutesWithoutContext