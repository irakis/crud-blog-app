
import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Add from './components/pages/Add';
import Edit from './components/pages/Edit';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import NavBar from './components/common/NavBar';
import Footer from './components/views/Footer.js';
import SinglePost from './components/pages/SinglePost';


const App = () => {
  return (
    <Container>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/post/:postId" element={<SinglePost/>}/>
          <Route path="/post/add" element={<Add/>}/>
          <Route path="/post/edit/:postId" element={<Edit/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      <Footer/>
    </Container>
  )
}

export default App;
