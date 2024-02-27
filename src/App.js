import React from "react";
import {BrowserRouter,Route,Routes } from "react-router-dom";
import Tailwind from "./TailwindCss";

function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path='/' element={<Tailwind/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
