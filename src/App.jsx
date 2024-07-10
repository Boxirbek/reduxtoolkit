import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Page/Home';
import Post from './Page/Post';
import About from './Page/About';

const App = () => {
  return (
    <Router>
      <div className='container'>
        
        <header>
          <h1>React JS Blog</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/post">Post</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <div className='footer'>
<h2>ToDo </h2>
<h2>Redux-Toolkit</h2>
        </div>
      </div>
    </Router>
  );
};

export default App;
