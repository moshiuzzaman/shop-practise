import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Shop from './component/Shop/Shop';


function App() {
  return (
    <div className="App">
        <Header/>
        <Shop/>
    </div>
  );
}

export default App;
