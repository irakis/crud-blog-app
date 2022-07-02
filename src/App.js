
import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Post from './components/pages/Post';
import Add from './components/pages/Add';
import Edit from './components/pages/Edit';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/post/:id" element={<Post/>}/>
      <Route path="/post/add" element={<Add/>}/>
      <Route path="/post/edit/:id" element={<Edit/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default App;
