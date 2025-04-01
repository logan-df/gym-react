import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Layout from './Layout';
import Home from './pages/Home';
import Progress from './pages/Progress';
import About from './pages/About';
import Workout from './pages/Workout'
import Diets from './pages/Diets'
import Nopage from './pages/Nopage';

function App() {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="progress" element={<Progress />} />
          <Route path="workout" element={<Workout />} />
          <Route path="diets" element={<Diets />} />
          <Route path="*" element={<Nopage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);