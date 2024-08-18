import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Manager from './component/Manager';

function App() {
  return (
    <>
      <Navbar />
      <Manager />
      <div className="text-white"></div>
    </>
  );
}

export default App;