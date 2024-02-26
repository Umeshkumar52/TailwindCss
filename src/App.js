import React from "react";
import {BrowserRouter,Route,Routes } from "react-router-dom";
import Tailwind from "./pages/TailwindCss";
import Home from "./pages/Home";
import ReactWalkThroughP_2 from "./pages/ReactWalkThroughP_2";
import ReactWalkThroughP_3 from "./pages/ReactWalkThroughP_3";
import ReactWalkThrough from "./pages/ReactWalkThrough";
import MilestoneExam from "./pages/MilestoneExam";
import PwSkillsblog from "./pages/pwSkillsBlog/PwSkillsblog";
import ReadBlog from "./pages/pwSkillsBlog/ReadBlog";
import MoviSearch from "./pages/moviSearchApp/MoviSearch";
import Todo from "./pages/todoApp/Todo";
import GallaryHome from "./pages/GallaryApp/GallaryHome";
import BirdDescription from "./pages/GallaryApp/BirdDescription";
function App() {
  return (
    <BrowserRouter>
       <Routes>
       <Route path='/' element={<Home/>}/>
         <Route path='todo' element={<Todo/>}/>
       <Route path='movies' element={<MoviSearch/>}/>
       <Route path='pwSkillsBlog' element={<PwSkillsblog/>}/>
         <Route path='readBlog' element={<ReadBlog/>}/>
         <Route path='tailwindCss' element={<Tailwind/>}/>
         <Route path='assignment4' element={<ReactWalkThroughP_2/>}/>
         <Route path='assignment5' element={<ReactWalkThroughP_3/>}/>
         <Route path='assignment3' element={<ReactWalkThrough/>}/>
         <Route path='assignment2' element={<MilestoneExam/>}/>
         <Route path='gallary' element={<GallaryHome/>}/>
         <Route path='description' element={<BirdDescription/>}/>

      </Routes>
   </BrowserRouter>
  );
}

export default App;
