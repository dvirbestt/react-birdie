import { useState } from 'react'

import './App.css'
import {Route, Routes} from "react-router";
import HomePage from "./Pages/HomePage.jsx";
import Connect from "./Pages/Connect.jsx";
import Explore from "./Pages/Explore.jsx";

function App() {


  return (
      <div className={"flex w-full items-center justify-center select-none "}>

          <Routes>
              <Route path={"/"} element={<Connect/>}/>
              <Route path={"/Home"} element={<HomePage/>}/>
              <Route path={"/*"} element={<Explore/>}/>
          </Routes>
      </div>
  )
}

export default App
