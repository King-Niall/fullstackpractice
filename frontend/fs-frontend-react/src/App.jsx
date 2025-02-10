import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import ViewPost from './pages/ViewPost';
import Login from './components/Login';
import Register from './components/Register';
import TestLog from './pages/TestLog';
const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home/>} />
          <Route path="/test" element={<TestLog/>} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts/:id" element={<ViewPost />} />
          <Route path="/create" element={<CreatePost/>} />
          <Route path="/edit/:id" element={<CreatePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
