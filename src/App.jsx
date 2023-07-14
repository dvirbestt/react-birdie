import { useState } from 'react'

import './App.css'
import {Route, Routes} from "react-router";
import HomePage from "./Pages/HomePage.jsx";
import Connect from "./Pages/Connect.jsx";

function App() {


  return (
      <div className={"flex w-full items-center justify-center"}>

          <Routes>
              <Route path={"/"} element={<Connect/>}/>
              <Route path={"/home"} element={<HomePage/>}/>
          </Routes>
      </div>
  )
}

export default App
