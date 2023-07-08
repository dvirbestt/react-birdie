import { useState } from 'react'

import './App.css'
import Login from "./Components/Login.jsx";
import {Route, Routes} from "react-router";
import Navbar from "./Components/Navbar.jsx";
import HomePage from "./Pages/HomePage.jsx";

function App() {


  return (
      <div className={"flex w-full items-center justify-center"}>

          <Routes>
              <Route path={"/"} element={<Login/>}/>
              <Route path={"/home"} element={<HomePage/>}/>
          </Routes>
      </div>
  )
}

export default App
