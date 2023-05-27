import React, {createContext, useReducer} from 'react'
import {Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Home from "./components/Home";

const Routing = () => {
  return(
    <>
    <Routes>
      



      <Route path="/" element={<Home/>}/>



      </Routes>
    </>
  )
}

const App=()=>{
 
  return(
    <>
   
      <Routing/>
   
    </>
  )
}

export default App 
