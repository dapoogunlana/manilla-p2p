import React from 'react';
import BaseRoute from './routes/_base-route';
import './assets/styles/general.scss';
import './App.scss';
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {
  AOS.init({
    duration: 1200,
  });
  return (
    <div className="App">
      <BaseRoute></BaseRoute>
    </div>
  );
}

export default App;
